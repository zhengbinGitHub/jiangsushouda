<?php

namespace App\Http\Controllers\Admin;

use App\Http\Requests\Advertise\StoreRequest;
use App\Http\Requests\Advertise\UpdateRequest;
use App\Models\Advertise;
use Illuminate\Http\Request;
use Illuminate\Support\Arr;

class AdvertiseController extends BaseController
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index(Request $request)
    {
		$title = $request->get('title', null);
		$limit = $request->get('limit', config('store.page_size'));
		$fields = [
			'id', 'title', 'is_index', 'is_channel', 'is_info',
			'pic_url', 'link', 'status', 'created_at'
		];
		$params = [];
		if(!is_null($title)){
			$params[] = ['title', 'like', "%{$title}%"];
		}
		$lists = Advertise::query()
			->where($params)
			->paginate($limit, $fields);
        return view('admin.advertise.index', compact('lists'));
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        return view('admin.advertise.create');
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(StoreRequest $request)
    {
        $datas = $request->all();
        $params = [];
        $params['title'] = Arr::get($datas, 'title');
        $imgs = Arr::get($datas, 'imgs', []);
        $picUrl = $imgs ? $imgs[0] : '';
		$params['pic_url'] = $picUrl;
		$status = Arr::get($datas, 'status', 0);
		$params['status'] = $status == 'on' ? 1 : 0;
		$isIndex = Arr::get($datas, 'is_index', '');
		$params['is_index'] = $isIndex == 'on' ? 1 : 0;
		$isChannel = Arr::get($datas, 'is_channel', '');
		$params['is_channel'] = $isChannel == 'on' ? 1 : 0;
		$isInfo = Arr::get($datas, 'is_info', '');
		$params['is_info'] = $isInfo == 'on' ? 1 : 0;
		$params['link'] = Arr::get($datas, 'link');
		$isDescription = Arr::get($datas, 'is_description', '');
		$params['is_description'] = $isDescription == 'on' ? 1 : 0;
		$params['sub_title'] = Arr::get($datas, 'sub_title', '');

		if(Advertise::query()->create($params)){
			return $this->success('添加成功');
		}
		return $this->error('添加失败');
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        $info = Advertise::query()->find($id);
        return view('admin.advertise.edit', compact('info'));
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(UpdateRequest $request, $id)
    {
    	$info = Advertise::query()->findOrFail($id);
		$datas = $request->all();
		$info->title = Arr::get($datas, 'title');
		$imgs = Arr::get($datas, 'imgs', []);
		$picUrl = $imgs ? $imgs[0] : '';
		$info->pic_url = $picUrl;
		$status = Arr::get($datas, 'status', 0);
		$info->status = $status == 'on' ? 1 : 0;
		$isIndex = Arr::get($datas, 'is_index', '');
		$info->is_index = $isIndex == 'on' ? 1 : 0;
		$isChannel = Arr::get($datas, 'is_channel', '');
		$info->is_channel = $isChannel == 'on' ? 1 : 0;
		$isInfo = Arr::get($datas, 'is_info', '');
		$info->is_info = $isInfo == 'on' ? 1 : 0;
		$info->link = Arr::get($datas, 'link');
		$isDescription = Arr::get($datas, 'is_description', '');
		$info->is_description = $isDescription == 'on' ? 1 : 0;
		$info->sub_title = Arr::get($datas, 'sub_title', '');

		if($info->save()){
			return $this->success('更新成功');
		}
		return $this->error('更新失败');
    }

	/**
	 * @param Request $request
	 * @param $id
	 * @return \Illuminate\Http\JsonResponse
	 */
	public function switch(Request $request, $id)
	{
		$status = $request->get('value', 1);
		$group = Advertise::query()->find($id);
		$group->status = $status;
		if($group->save()){
			return $this->success('操作成功');
		}
		return $this->error('操作失败');
	}
}
