<?php

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::group(['namespace' => 'Web'], function (){
	//首页
	Route::get('/', ['as' => 'home', 'uses' => 'HomeController@index'])->name('/');
	Route::post('comment', 'HomeController@comment');
	//文章
	Route::get('news/{alias?}', ['as' => 'news', 'uses' =>'NewsController@index']);
	Route::get('news/info/{id}', 'NewsController@show');
	//业务员
	Route::get('business', ['as' => 'business', 'uses' =>'BusinessController@index']);
	Route::get('business/info/{alias}', 'BusinessController@show');
	//工程
	Route::get('project/{alias?}', ['as' => 'project', 'uses' =>'ProjectController@index']);
	Route::get('project/info/{alias}', 'ProjectController@show');
	//关于我们
	Route::get('company/{alias?}', ['as' => 'company', 'uses' =>'CompanyController@index']);
	//招聘
	Route::get('job', ['as' => 'job', 'uses' => 'JobController@index']);
	Route::get('job/info/{id}', 'JobController@show');

	Route::get('contact', ['as' => 'contact', 'uses' => 'ContactController@index']);

	//demo
	Route::get('/list', 'ListController@index');
	Route::get('/list/info', 'ListController@info');
	Route::get('/list/server', 'ListController@server');
	Route::get('/list/detail', 'ListController@detail');
	Route::get('/list/news', 'ListController@news');
	Route::get('/list/show', 'ListController@show');
	Route::get('/list/about', 'ListController@about');
});