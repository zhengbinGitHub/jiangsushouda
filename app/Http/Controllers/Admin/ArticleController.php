<?php

namespace App\Http\Controllers\Admin;

use App\Http\Requests\Article\StoreRequest;
use App\Http\Requests\Article\UpdateRequest;
use App\Models\Article;
use App\Models\ArticleDetail;
use App\Models\Group;
use Illuminate\Http\Request;
use Illuminate\Support\Arr;
use Illuminate\Support\Facades\DB;

class ArticleController extends BaseController
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index(Request $request)
    {
		$title = $request->get('title', null);
		$groupId = $request->get('group_id');
		$limit = $request->get('limit', config('store.page_size'));
		$fields = ['id', 'title', 'subtitle', 'cover', 'group_id', 'is_hot', 'status', 'created_at'];
		$params = [];
		if(0 < $groupId && is_numeric($groupId)){
			$params['group_id'] = $groupId;
		}
		if(!is_null($title)){
			$params[] = ['title', 'like', "%{$title}%"];
		}

		$groups = $this->tree();
		$lists = Article::query()
			->where($params)
			->with('group')
			->paginate($limit, $fields);
		return view('admin.article.index', compact('lists', 'groups'));
    }

	/**
	 * 无极分类
	 * @return array
	 */
    private function tree()
	{
		$groups = Group::query()->get(['id', 'name', 'level', 'parent_id'])->toArray();
		return $this->getTree($groups, 0, 0);
	}

	/**
	 * 树递归
	 * @param $data
	 * @param int $level
	 * @param int $pid
	 * @return array
	 */
	private function getTree(&$data, $level = 0, $pid = 0)
	{
		if(count($data) == 0) return [];
		$trees = [];
		foreach ($data as $key=>$item){
			if($item['parent_id'] == $pid){//父亲找到儿子
				$item['level'] = $level + 1;
				$trees[] = $item;
				$trees = array_merge($trees, $this->getTree($data, $item['level'], $item['id']));
			}
		}
		return $trees;
	}

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
    	$groups = $this->tree();
        return view('admin.article.create', compact('groups'));
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
        $params['subtitle'] = Arr::get($datas, 'subtitle');
        $params['memo'] = Arr::get($datas, 'desc');
        $imgs = Arr::get($datas, 'imgs', []);
        $params['cover'] = $imgs ? $imgs[0] : '';
        $status = Arr::get($datas, 'status', 0);
        $params['status'] = $status == 'on' ? 1 : 0;
        $isHot = Arr::get($datas, 'is_hot', 0);
        $params['is_hot'] = $isHot == 'on' ? 1 : 0;
        $params['group_id'] = Arr::get($datas, 'group_id');
        $params['created_at'] = now()->format('Y-m-d H:i:s');
        $params['updated_at'] = now()->format('Y-m-d H:i:s');
        DB::beginTransaction();
        $id = Article::query()->insertGetId($params);
        if(!$id){
        	DB::rollBack();
        	return $this->error('文章添加失败');
		}
        $content = Arr::get($datas, 'content');
        if(!ArticleDetail::query()->create([
        	'article_id' => $id,
			'content' => $content,
		])){
			DB::rollBack();
			return $this->error('添加文字详情失败');
		}
        DB::commit();
        return $this->success('添加文章成功');
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
    	$fields = [
    		'id', 'title', 'memo', 'cover', 'group_id', 'is_hot', 'status', 'subtitle'
		];
    	$info = Article::query()->with('detail')->find($id, $fields);
    	$groups = $this->tree();
        return view('admin.article.edit', compact('info', 'groups'));
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
		$datas = $request->all();
		$params = [];
		$params['title'] = Arr::get($datas, 'title');
		$params['subtitle'] = Arr::get($datas, 'subtitle');
		$params['memo'] = Arr::get($datas, 'desc');
		$imgs = Arr::get($datas, 'imgs', []);
		$params['cover'] = $imgs ? $imgs[0] : '';
		$status = Arr::get($datas, 'status', 0);
		$params['status'] = $status == 'on' ? 1 : 0;
		$isHot = Arr::get($datas, 'is_hot', 0);
		$params['is_hot'] = $isHot == 'on' ? 1 : 0;
		$params['group_id'] = Arr::get($datas, 'group_id');
		DB::beginTransaction();
		$result = Article::query()->where('id', $id)->update($params);
		if(!$result){
			DB::rollBack();
			return $this->error('文章更新失败');
		}
		$content = Arr::get($datas, 'content');
		if(!ArticleDetail::query()->where('article_id', $id)->update([
			'content' => $content,
		])){
			DB::rollBack();
			return $this->error('更新文字详情失败');
		}
		DB::commit();
		return $this->success('更新文章成功');
    }

	/**
	 * @param Request $request
	 * @param $id
	 * @return \Illuminate\Http\JsonResponse
	 */
	public function switch(Request $request, $id)
	{
		$status = $request->get('value', 1);
		$group = Article::query()->find($id);
		$group->status = $status;
		if($group->save()){
			return $this->success('操作成功');
		}
		return $this->error('操作失败');
	}
}
