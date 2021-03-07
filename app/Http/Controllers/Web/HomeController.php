<?php

namespace App\Http\Controllers\Web;

use App\Http\Requests\CommentRequest;
use App\Models\Advertise;
use App\Models\Article;
use App\Models\Comment;
use App\Models\Equipment;
use App\Models\Group;
use Illuminate\Support\Arr;
use Illuminate\Support\Str;

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
		//通栏
		$banners = Advertise::query()
			->where('is_index', 1)
			->where('status', Advertise::STATUS_ON)
			->get(['title', 'pic_url', 'link', 'is_description', 'sub_title']);

		$groups = $this->group();
		$business = $groups['business'];
		$projectChilds = array_slice($groups['project_childs'], 0, 3);

		$projects = Article::query()->with('group.parent')
			->whereIn('group_id', $groups['project_ids'])
			->take(8)
			->where('status', Article::STATUS_ON)
			->latest()
			->get(['id', 'group_id', 'title', 'memo', 'created_at', 'cover']);

		$equipments = $this->getEquipment();

		list($firstArticle, $secondArticles) = $this->getArticle($groups['news_group_ids']);
		return view($this->template . '.home.index', compact(
			'banners',
			'business',
			'projectChilds',
			'projects',
			'equipments',
			'firstArticle',
			'secondArticles'
		));
	}

	/**
	 * 分类
	 * @return array
	 */
	private function group()
	{
		$groups = Group::query()->with(['childs' => function($query){
			$query->where('status', Group::STATUS_ON)->orderBy('id', 'desc');
		}])
			->whereIn('alias', ['business', 'project', 'news'])
			->get(['id', 'alias']);
		$projectIds = $newsGroupIds = [];
		$business = collect();
		$projectChilds = [];
		foreach ($groups as $items){
			if($items->alias == 'business'){
				$business = $items->childs;
			} else{
				foreach ($items->childs as $item){
					if($items->alias == 'project') {
						array_push($projectChilds, [
							'alias' => $items->alias.'/'.$item->alias,
							'name' => $item->name,
						]);
						array_push($projectIds, $item->id);
					} elseif ($items->alias == 'news'){
						array_push($newsGroupIds, $item->id);
					}
				}
			}
		}
		return [
			'business' => $business,
			'project_ids' => $projectIds,
			'news_group_ids' => $newsGroupIds,
			'project_childs' => $projectChilds
		];
	}

	/**
	 * 设备
	 * @return \Illuminate\Database\Eloquent\Builder[]|\Illuminate\Database\Eloquent\Collection|\Illuminate\Database\Query\Builder[]|\Illuminate\Support\Collection
	 */
	private function getEquipment()
	{
		return Equipment::query()->take(12)->get(['pic_url']);
	}

	/**
	 * 文章
	 * @param array $groupIds
	 * @return array
	 */
	private function getArticle(array $groupIds)
	{
		$lists = Article::query()->whereIn('group_id', $groupIds)
			->with('group.parent')
			->where('is_hot', 1)
			->where('status', Article::STATUS_ON)
			->take(5)
			->latest()
			->get(['id', 'title', 'subtitle', 'memo', 'cover', 'group_id']);
		$firstArticle = $secondArticles = [];
		foreach ($lists as $key=>$item){
			$params = [
				'id' => $item->id,
				'path' => isset($item->group->parent) ? $item->group->parent->alias : $item->group->alias,
				'title' => $item->title,
				'subtitle' => $item->subtitle,
				'memo' => Str::limit($item->memo, 40, '(...)'),
				'cover' => $item->cover,
			];
			if(0 == $key){
				$firstArticle = $params;
			} else {
				array_push($secondArticles, $params);
			}
		}
		return [$firstArticle, $secondArticles];
	}

	/**
	 * 留言内容
	 * @param CommentRequest $request
	 */
	public function comment(CommentRequest $request)
	{
		$datas = $request->all();
		$params = [];
		$params['name'] = Arr::get($datas, 'name');
		$params['email'] = Arr::get($datas, 'email');
		$params['tel'] = Arr::get($datas, 'tel');
		$params['ip'] = $request->getClientIp();
		$params['content'] = Arr::get($datas, 'content');
		if(Comment::query()->create($params)){
			return $this->success('提交成功');
		}
		return $this->error('提交失败');
	}
}
