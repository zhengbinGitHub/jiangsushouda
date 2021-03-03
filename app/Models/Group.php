<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Group extends Model
{
    //
	protected $guarded = [];

	/**
	 * @return \Illuminate\Database\Eloquent\Relations\HasMany
	 */
	public function childs()
	{
		return $this->hasMany(self::class,'parent_id','id')->orderBy('id','desc');
	}
}
