<?php
/**
 * 设备设施
 */
namespace App\Http\Controllers\Admin;

use App\Models\Equipment;
use Illuminate\Http\Request;
use Illuminate\Support\Arr;

class EquipmentController extends BaseController
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index(Request $request)
    {
		$limit = $request->get('limit', config('store.page_size'));
		$fields = ['id', 'pic_url', 'status', 'created_at'];
		$params = [];
		$lists = Equipment::query()
			->where($params)
			->paginate($limit, $fields);
        return view('admin.equipment.index', compact('lists'));
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        return view('admin.equipment.create');
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
		$datas = $request->all();
		$params = [];
		$imgs = Arr::get($datas, 'imgs', []);
		$picUrl = $imgs ? $imgs[0] : '';
		$params['pic_url'] = $picUrl;
		$status = Arr::get($datas, 'status', 0);
		$params['status'] = $status == 'on' ? 1 : 0;

		if(Equipment::query()->create($params)){
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
    	$info = Equipment::query()->findOrFail($id);
		return view('admin.equipment.edit', compact('info'));
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
		$info = Equipment::query()->findOrFail($id);
		$datas = $request->all();
		$imgs = Arr::get($datas, 'imgs', []);
		$picUrl = $imgs ? $imgs[0] : '';
		$info->pic_url = $picUrl;
		$status = Arr::get($datas, 'status', 0);
		$info->status = $status == 'on' ? 1 : 0;
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
		$group = Equipment::query()->find($id);
		$group->status = $status;
		if($group->save()){
			return $this->success('操作成功');
		}
		return $this->error('操作失败');
	}
}
