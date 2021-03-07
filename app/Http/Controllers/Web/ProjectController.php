<?php

namespace App\Http\Controllers\Web;

use App\Models\Article;
use Illuminate\Http\Request;

class ProjectController extends BaseController
{
	public function __construct()
	{
		parent::__construct();
	}

	/**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index(Request $request, string $alias = null)
    {
    	$groupArr = $this->getGroups('project', $alias);
    	$groupIds = $groupArr['group_ids'];
    	$groups = $groupArr['groups'];
		$lists = Article::query()
			->when(!is_null($alias), function ($query) use($alias){
				$query->whereHas('group', function ($query) use($alias){
					$query->where('alias', $alias);
				});
			}, function ($query) use($groupIds){
				$query->whereIn('group_id', $groupIds);
			})
			->latest()
			->paginate(config('store.page_size'), [
				'id', 'title', 'memo', 'subtitle',
				'cover', 'group_id', 'created_at'
			]);
        return view($this->template.'.project.index', compact('lists', 'groups', 'alias'));
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
    	$info = Article::query()->with(['detail','group'])->findOrFail($id, [
    		'id', 'title', 'cover', 'subtitle', 'memo', 'created_at', 'group_id'
		]);
    	$group = $info->group;
		$groupArrs = $this->getGroups('project');
		$groupIds = $groupArrs['group_ids'];
		foreach ($groupIds as $key=>$groupId){
			if($group && $groupId == $group->id){
				unset($groupIds[$key]);
			}
		}
		$lists = Article::query()->whereIn('group_id', $groupIds)
			->latest()
			->take(8)
			->get([
				'id', 'title', 'memo', 'subtitle',
				'cover', 'group_id', 'created_at'
			]);
		$groups = $groupArrs['groups'];
        return view($this->template .'.project.show', compact('info', 'group', 'groups', 'lists'));
    }
}
