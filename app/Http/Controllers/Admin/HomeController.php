<?php

namespace App\Http\Controllers\Admin;

use Illuminate\Http\Request;

class HomeController extends BaseController
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        //
		$navigations = [
			[
				'icon' => 'layui-icon-chart-screen',
				'name' => '分类管理',
				'url' => '',
				'children' => [
					[
						'icon' => '',
						'url' => route('admin.group'),
						'name' => '分类列表'
					],
				]
			],
			[
				'icon' => 'layui-icon-list',
				'name' => '文章管理',
				'url' => '',
				'children' => [
					[
						'icon' => '',
						'url' => route('admin.article'),
						'name' => '文章列表'
					],
				]
			],
			[
				'icon' => 'layui-icon-picture',
				'name' => '通栏管理',
				'url' => '',
				'children' => [
					[
						'icon' => '',
						'url' => route('admin.advertise'),
						'name' => '通栏列表'
					],
				]
			],
		];
		return view('admin.layouts.frame', compact('navigations'));
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        //
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        //
    }
}
