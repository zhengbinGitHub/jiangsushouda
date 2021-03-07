<?php

namespace App\Http\Controllers\Web;


use App\Models\Advertise;
use App\Models\Article;

class ContactController extends BaseController
{
    public function __construct()
	{
		parent::__construct();
	}

	public function index()
	{
		$banner = Advertise::query()
			->where('is_info', 1)
			->where('status', Advertise::STATUS_ON)
			->first(['id', 'pic_url', 'title']);

		$groupArr = $this->getGroups('contact');
		$group = $groupArr['groups'];
		$info = Article::with('detail')
			->where('group_id', $group->id)
			->where('status', Article::STATUS_ON)
			->firstOrFail(['id', 'title', 'subtitle', 'memo', 'cover', 'group_id']);
		return view($this->template.'.job.index', compact('banner', 'group', 'info'));

		return view($this->template . '.contact.index', compact('banner', 'group', 'info'));
	}
}
