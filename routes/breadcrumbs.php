<?php
/**
 * Created by PhpStorm.
 * User: maczheng
 * Date: 2021-03-06
 * Time: 23:07
 */
// Home
Breadcrumbs::register('home', function($breadcrumbs)
{
	$breadcrumbs->push('首页', url('/'));
});

Breadcrumbs::register('news', function($breadcrumbs)
{
	$breadcrumbs->parent('home');
	$breadcrumbs->push('新闻动态', url('/news'));
});

Breadcrumbs::register('new_info', function($breadcrumbs, $info)
{
	$breadcrumbs->parent('news');
	$breadcrumbs->push($info->group->name, url('/news', ['alias' => $info->group->alias]));
});

Breadcrumbs::register('business', function($breadcrumbs)
{
	$breadcrumbs->parent('home');
	$breadcrumbs->push('业务范围', url('/business'));
});

Breadcrumbs::register('business_info', function($breadcrumbs, $group)
{
	$breadcrumbs->parent('business');
	$breadcrumbs->push($group->name, url('business', ['alias' => $group->alias]));
});

Breadcrumbs::register('project', function($breadcrumbs)
{
	$breadcrumbs->parent('home');
	$breadcrumbs->push('工程项目', url('/project'));
});

Breadcrumbs::register('project_info', function($breadcrumbs, $group)
{
	$breadcrumbs->parent('project');
	$breadcrumbs->push($group->name, url('/project', ['alias' => $group->alias]));
});

Breadcrumbs::register('company', function($breadcrumbs, $group)
{
	$breadcrumbs->parent('home');
	$breadcrumbs->push($group->name);
});

Breadcrumbs::register('job', function($breadcrumbs)
{
	$breadcrumbs->parent('home');
	$breadcrumbs->push('人才招聘', url('job'));
});

Breadcrumbs::register('job_info', function($breadcrumbs, $info)
{
	$breadcrumbs->parent('job');
	$breadcrumbs->push($info->title);
});
