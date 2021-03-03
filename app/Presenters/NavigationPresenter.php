<?php
/**
 * Created by PhpStorm.
 * User: maczheng
 * Date: 2021-03-03
 * Time: 21:53
 */

namespace App\Presenters;


use App\Models\Group;

class NavigationPresenter
{
	/**
	 * 菜单
	 */
	public function navigation()
	{
		$navigations = Group::query()
			->with('childs')
			->where('parent_id', 0)
			->where('status', 1)
			->get(['id', 'name', 'parent_id', 'alias', 'type', 'is_sub']);
		return view(config('store.template').'.presenter.navigation', compact('navigations'));
	}
}