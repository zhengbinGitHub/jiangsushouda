<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class AlterGroupIsSubColumn extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        //
		if(Schema::hasTable('groups')){
			if(!Schema::hasColumn('groups', 'is_sub')){
				Schema::table('groups', function(Blueprint $table){
					$table->tinyInteger('is_sub')->default(0)->comment('是否有子类 1有 0无');
				});
			}
		}
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        //
    }
}
