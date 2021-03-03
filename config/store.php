<?php
/**
 * Created by PhpStorm.
 * User: maczheng
 * Date: 2021-02-25
 * Time: 23:16
 */
return [
	'page_size' => 20,
	'route' => [
		'ueditor' => '/admin/ueditor/server',
		'upload'=>'/admin/upload/server',
		'options' => [
			'middleware' => ['auth:admin','auth:tenant'],
		],
	],
	'template' => env('WEB_VIEW_TEMPLATE'),
	'web_title' => '江苏首达建设有限公司',
	'site_type' => '建筑类网站',
	'logo' => env('LOGO', '/images/1492595975108.png'),
	'icp' => env('ICP', 'icp'),
	'copyright' => env('COPYRIGHT', '2021 mo005_2107 - 企业类网站.'),
	'qq' => env('QQ', '8888')
];