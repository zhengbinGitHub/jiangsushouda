<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Group extends Model
{
	const STATUS_ON = 1;
    //
	protected $guarded = [];

	/**
	 * @return \Illuminate\Database\Eloquent\Relations\HasMany
	 */
	public function childs()
	{
		return $this->hasMany(self::class,'parent_id','id')->orderBy('id','desc');
	}

	/**
	 * @return \Illuminate\Database\Eloquent\Relations\BelongsTo
	 */
	public function parent()
	{
		return $this->belongsTo(self::class, 'parent_id');
	}
}
