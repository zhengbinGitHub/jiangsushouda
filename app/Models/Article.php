<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Article extends Model
{
    //
	protected $guarded = [];

	/**
	 * 分类
	 * @return \Illuminate\Database\Eloquent\Relations\BelongsTo
	 */
	public function group()
	{
		return $this->belongsTo(Group::class, 'group_id');
	}

	/**
	 * @return \Illuminate\Database\Eloquent\Relations\HasOne
	 */
	public function detail()
	{
		return $this->hasOne(ArticleDetail::class, 'article_id');
	}
}
