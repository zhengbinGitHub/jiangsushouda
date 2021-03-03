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

//Route::get('/', function () {
//    return view('welcome');
//});

Route::group(['namespace' => 'Web'], function (){
	Route::get('/', 'HomeController@index');
	Route::get('/list', 'ListController@index');
	Route::get('/list/info', 'ListController@info');
	Route::get('/list/server', 'ListController@server');
});