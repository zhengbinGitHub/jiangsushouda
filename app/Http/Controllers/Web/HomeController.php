<?php

namespace App\Http\Controllers\Web;

use App\Models\Advertise;

class HomeController extends BaseController
{
    public function __construct()
	{
		parent::__construct();
	}

	/**
	 * 首页
	 * @return \Illuminate\Contracts\View\Factory|\Illuminate\View\View
	 */
	public function index()
	{
		$banners = Advertise::query()
			->where('is_index', 1)
			->where('status', Advertise::STATUS_ON)
			->get(['title', 'pic_url', 'link', 'is_description', 'sub_title']);
		return view($this->template . '.home.index', compact('banners'));
	}
}
