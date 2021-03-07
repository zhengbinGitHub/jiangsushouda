<?php

namespace App\Http\Controllers\Web;

use App\Models\Advertise;
use App\Models\Article;

class CompanyController extends BaseController
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
    public function index(string $alias = 'profile')
    {
		$banner = Advertise::query()
			->where('is_info', 1)
			->where('status', Advertise::STATUS_ON)
			->first(['id', 'pic_url', 'title']);

		$groupArr = $this->getGroups($alias);
		$group = $groupArr['groups'];
		$info = Article::with('detail')
			->where('group_id', $group->id)
			->where('status', Article::STATUS_ON)
			->firstOrFail(['id', 'title', 'subtitle', 'memo', 'cover', 'group_id']);
		return view($this->template . '.company.index', compact('group', 'info', 'banner'));
    }
}
