<?php

namespace App\Http\Controllers\Web;

use Illuminate\Http\Request;

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
		return view($this->template . '.home.index');
	}
}
