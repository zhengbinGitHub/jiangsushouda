<?php

namespace App\Http\Controllers\Web;

use App\Http\Controllers\Controller;
use App\Models\Group;

class BaseController extends Controller
{
    protected $template = '';

	public function __construct()
	{
		$this->template = config('store.template');
	}

	/**
	 * 成功JSON
	 * @param string $message
	 * @param null $data
	 * @return \Illuminate\Http\JsonResponse
	 */
	protected function success($message = 'ok', $data = null)
	{
		return response()->json(['status' => 1, 'message' => $message, 'data' => $data]);
	}

	/**
	 * 失败JSON
	 * @param string $message
	 * @param null $data
	 * @return \Illuminate\Http\JsonResponse
	 */
	protected function error($message = 'ok', $data = null)
	{
		return response()->json(['status' => 0, 'message' => $message, 'data' => $data]);
	}

	/**
	 * 分类
	 * @param string $alias
	 * @return array
	 */
	protected function getGroups(string $module, string $alias = null)
	{
		$groups = Group::query()->with('childs')
			->where('alias', $module)
			->where('status', 1)
			->first();
		$groupIds = [];
		array_push($groupIds, $groups->id);
		if(empty($alias) && isset($groups->childs)){
			foreach ($groups->childs as $item){
				array_push($groupIds, $item->id);
			}
		}
		return ['group_ids' => $groupIds, 'groups' => $groups];
	}
}
