<?php
/**
 * Created by PhpStorm.
 * User: maczheng
 * Date: 2021-02-25
 * Time: 17:51
 */
Route::get('admin/login', 'Auth\LoginController@showLogin');
Route::post('admin/login', 'Auth\LoginController@login');
Route::get('admin/logout', 'Auth\LoginController@logout');

Route::group(['namespace'=>'Admin', 'prefix' => 'admin', 'middleware' => ['admin.guest:web']], function(){
	Route::get('home', 'HomeController@index');
	Route::any('ueditor/server', 'UEditorController');
	Route::any('upload/server', 'UploadController');

	//分类
	Route::get('group', 'GroupController@index')->name('admin.group');
	Route::post('group/store', 'GroupController@store');
	Route::put('group/update', 'GroupController@update');
	Route::post('group/switch/{id}', 'GroupController@switch');

	//文章
	Route::get('article', 'ArticleController@index')->name('admin.article');
	Route::get('article/edit/{id}', 'ArticleController@edit');
	Route::get('article/create', 'ArticleController@create');
	Route::post('article/store', 'ArticleController@store')->name('admin.article.store');
	Route::put('article/update/{id}', 'ArticleController@update')->name('admin.article.update');
	Route::post('article/switch/{id}', 'ArticleController@switch');

	//广告
	Route::get('advertise', 'AdvertiseController@index')->name('admin.advertise');
	Route::get('advertise/edit/{id}', 'AdvertiseController@edit');
	Route::get('advertise/create', 'AdvertiseController@create');
	Route::post('advertise/store', 'AdvertiseController@store')->name('admin.advertise.store');
	Route::put('advertise/update/{id}', 'AdvertiseController@update')->name('admin.advertise.update');
	Route::post('advertise/switch/{id}', 'AdvertiseController@switch');

	//设备
	Route::get('equipment', 'EquipmentController@index')->name('admin.equipment');
	Route::get('equipment/edit/{id}', 'EquipmentController@edit');
	Route::get('equipment/create', 'EquipmentController@create');
	Route::post('equipment/store', 'EquipmentController@store')->name('admin.equipment.store');
	Route::put('equipment/update/{id}', 'EquipmentController@update')->name('admin.equipment.update');
	Route::post('equipment/switch/{id}', 'EquipmentController@switch');
});