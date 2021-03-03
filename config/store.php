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
];