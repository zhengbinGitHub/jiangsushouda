<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Advertise extends Model
{
	const STATUS_ON = 1;

	//追加
    public $appends = ['position'];

    //黑名单
	protected $guarded = [];

	/**
	 * 图片位置
	 * @return string
	 */
	public function getPositionAttribute()
	{
		$str = [];
		if($this->is_index) $str[] ='首页';
		if($this->is_channel) $str[] ='频道';
		if($this->is_info) $str[] ='详情';
		return implode(',', $str);
	}
}
