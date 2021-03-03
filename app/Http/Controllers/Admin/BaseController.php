<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;

class BaseController extends Controller
{
	/**
	 * 成功
	 * @param $message
	 * @param null $data
	 * @return \Illuminate\Http\JsonResponse
	 */
	protected function success($message, $data = null)
	{
		return response()->json([
			'status' => 1,
			'message' => $message,
			'data' => $data
		]);
	}

	/**
	 * 错误
	 * @param $message
	 * @param null $data
	 * @return \Illuminate\Http\JsonResponse
	 */
	protected function error($message, $data = null)
	{
		return response()->json([
			'status' => 0,
			'message' => $message,
			'data' => $data
		]);
	}
}
