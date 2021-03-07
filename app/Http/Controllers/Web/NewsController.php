<?php

namespace App\Http\Controllers\Web;

use App\Models\Article;
use App\Models\Group;
use Illuminate\Http\Request;

class NewsController extends BaseController
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
    public function index(Request $request, $alias = null)
    {
		$groupArrs = $this->getGroups('news', $alias);
		$groupIds = $groupArrs['group_ids'];
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
		$groups = $groupArrs['groups'];
        return view($this->template . '/news/index', compact('lists', 'groups', 'alias'));
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
    	$info = Article::query()->with(['detail', 'group.parent'])->findOrFail($id);
    	$relations = Article::query()
			->with('group.parent')
			->where('group_id', $info->group_id)
			->where('id', '<>', $id)
			->take(3)
			->get();
        return view($this->template . '/news/show', compact('info', 'relations'));
    }
}
