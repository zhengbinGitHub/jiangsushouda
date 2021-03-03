<?php

namespace App\Http\Controllers\Web;

use App\Http\Controllers\Controller;

class BaseController extends Controller
{
    protected $template = '';

	public function __construct()
	{
		$this->template = config('store.template');
	}
}
