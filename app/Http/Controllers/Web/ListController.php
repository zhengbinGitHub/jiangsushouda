<?php

namespace App\Http\Controllers\web;

use Illuminate\Http\Request;

class ListController extends BaseController
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
    public function index()
    {
        return view($this->template.'.list.index');
    }

	/**
	 * 项目详情
	 * @return \Illuminate\Contracts\View\Factory|\Illuminate\View\View
	 */
    public function info()
	{
		return view($this->template.'.list.info');
	}

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function server()
    {
		return view($this->template.'.list.server');
    }

	/**
	 * 服务详情
	 * @return \Illuminate\Contracts\View\Factory|\Illuminate\View\View
	 */
    public function detail()
	{
		return view($this->template.'.list.detail');
	}

    /**
	 * 文章列表
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function news()
    {
        return view($this->template . '.list.news');
    }

	/**
	 * 文章详情
	 * @return \Illuminate\Contracts\View\Factory|\Illuminate\View\View
	 */
    public function show()
	{
		return view($this->template . '.list.show');
	}

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function about()
    {
        return view($this->template . '.list.about');
    }
}
