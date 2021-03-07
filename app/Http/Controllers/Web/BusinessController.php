<?php

namespace App\Http\Controllers\Web;

use App\Models\Advertise;
use App\Models\Article;
use App\Models\Group;
use Illuminate\Http\Request;

class BusinessController extends BaseController
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
    public function index(Request $request)
    {
		$banner = Advertise::query()
			->where('is_channel', 1)
			->where('status', Advertise::STATUS_ON)
			->first(['id', 'pic_url', 'title']);

		$groupArr = $this->getGroups('business');
		$lists = Group::query()
			->where('parent_id', $groupArr['groups']->id)
			->latest()
			->paginate(config('store.page_size'), [
				'id', 'name', 'memo', 'alias',
				'cover', 'created_at'
			]);

		return view($this->template . '.business.index', compact('lists', 'banner'));
    }

    /**
     * Display the specified resource.
     *
     * @param  string  $alias
     * @return \Illuminate\Http\Response
     */
    public function show(string $alias)
    {
        $group = Group::query()
			->where('alias', $alias)
			->firstOrFail(['id', 'name', 'alias', 'memo', 'cover']);

        $info = Article::query()
			->with('detail')
			->where('group_id', $group->id)
			->firstOrFail(['id', 'title', 'subtitle']);

        return view($this->template . '.business.show', compact('group', 'info'));
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
