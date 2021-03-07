<?php

namespace App\Http\Controllers\Web;


use App\Models\Advertise;
use App\Models\Article;

class JobController extends BaseController
{
    public function __construct()
	{
		parent::__construct();
	}

	/**
	 * @return \Illuminate\Contracts\View\Factory|\Illuminate\View\View
	 */
	public function index()
	{
		$banner = Advertise::query()
			->where('is_info', 1)
			->where('status', Advertise::STATUS_ON)
			->first(['id', 'pic_url', 'title']);

		$groupArr = $this->getGroups('job');
		$group = $groupArr['groups'];
		$lists = Article::with('detail')
			->where('group_id', $group->id)
			->where('status', Article::STATUS_ON)
			->paginate(config('store.page_size'), [
				'id',
				'title',
				'subtitle',
				'memo',
				'cover',
				'group_id',
				'created_at'
			]);
		return view($this->template.'.job.index', compact('banner', 'group', 'lists'));
	}

	/**
	 * @param $id
	 * @return \Illuminate\Contracts\View\Factory|\Illuminate\View\View
	 */
	public function show($id)
	{
		$info = Article::query()
			->with('group')
			->where(['id' => $id, 'status' => Article::STATUS_ON])
			->firstOrFail();
		return view($this->template . '.job.show', compact('info'));
	}
}
