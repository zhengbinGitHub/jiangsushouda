<?php

namespace App\Http\Controllers\Admin;

use App\Http\Requests\Group\StoreRequest;
use App\Http\Requests\Group\UpdateRequest;
use App\Models\Group;
use Illuminate\Http\Request;
use Illuminate\Support\Arr;

class GroupController extends BaseController
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index(Request $request)
    {
        $datas = $request->all();
        $map = [];
        $name = Arr::get($datas, 'name', '');
        if($name) $map['name'] = $name;
        $level = Arr::get($datas, 'level', 1) + 1;
        $parentId = Arr::get($datas, 'id', 0);
        $map['parent_id'] = $parentId;
		$limit = Arr::get($datas, 'limit', config('store.page_size'));
        $lists = Group::query()->where($map)->paginate($limit, [
        	'id', 'name', 'level', 'type', 'memo', 'alias',
			'status', 'created_at', 'is_sub'
		]);
		return view('admin.group.index', compact('lists','level', 'parentId'));
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
		$params['name'] = Arr::get($datas, 'name');
		$params['alias'] = Arr::get($datas, 'alias');
		$params['memo'] = Arr::get($datas, 'memo');
		$params['type'] = Arr::get($datas, 'type');
		$params['parent_id'] = Arr::get($datas, 'parent_id', 0);
		$params['level'] = Arr::get($datas, 'level', 1);
		$params['status'] = 1;
		$params['is_sub'] = Arr::get($datas, 'is_sub');
		if(Group::query()->create($params)){
			return $this->success('添加成功');
		}
		return $this->error('添加失败');
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(UpdateRequest $request)
    {
		$datas = $request->all();
		$id = Arr::get($datas, 'id', 0);
		if(0 == $id){
			return $this->error('参数错误');
		}
		$info = Group::query()->find($id);
		$info->name = Arr::get($datas, 'name');
		$info->memo = Arr::get($datas, 'memo');
		$info->is_sub = Arr::get($datas, 'is_sub');
		if($info->save()){
			return $this->success('更新成功');
		}
		return $this->error('更新是比');
    }

	/**
	 * @param Request $request
	 * @param $id
	 * @return \Illuminate\Http\JsonResponse
	 */
	public function switch(Request $request, $id)
	{
		$status = $request->get('value', 1);
		$group = Group::query()->find($id);
		$group->status = $status;
		if($group->save()){
			return $this->success('操作成功');
		}
		return $this->error('操作失败');
	}
}
