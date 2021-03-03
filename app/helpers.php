<?php
/**
 * Created by PhpStorm.
 * User: maczheng
 * Date: 2021-02-27
 * Time: 23:35
 */

use Illuminate\Support\Str;

if(!function_exists('format_upload_path')) {

	/**
	 * @param $path
	 * @param $filename
	 * @return mixed|string|string[]|null
	 *
	 * 格式图片路径
	 */
	function format_upload_path($path,$filename)
	{
		$replacement = array_merge(explode('-', date('Y-y-m-d-H-i-s')), [$filename, time()]);
		$placeholders = ['{yyyy}', '{yy}', '{mm}', '{dd}', '{hh}', '{ii}', '{ss}', '{filename}', '{time}'];
		$path = str_replace($placeholders, $replacement, $path);

		//替换随机字符串
		if (preg_match('/\{rand\:([\d]*)\}/i', $path, $matches)) {
			$length = min($matches[1], strlen(PHP_INT_MAX));
			$path = preg_replace('/\{rand\:[\d]*\}/i', str_pad(mt_rand(0, pow(10, $length) - 1), $length, '0', STR_PAD_LEFT), $path);
		}

		if (!Str::contains($path, $filename)) {
			$path = Str::finish($path, '/').$filename;
		}

		return $path;
	}
}

if(!function_exists('get_controller_function')) {
	/**
	 * @return array
	 * 获取控制器和方法名
	 */
	function get_controller_function()
	{
		list($class, $method) = explode('@', \Route::current()->getActionName());
		# 模块名
		$params['modules'] = strtolower(str_replace(
			'\\',
			'.',
			str_replace(
				'App\\Http\\Controllers\\',
				'',
				trim(
					implode('\\', array_slice(explode('\\', $class), 0, -1)),
					'\\'
				)
			)
		));

		# 控制器名称
		$params['controller'] = strtolower(str_replace(
			'Controller',
			'',
			substr(strrchr($class, '\\'), 1)
		));

		# 方法名
		$params['method'] = $method;
		return $params;
	}
}