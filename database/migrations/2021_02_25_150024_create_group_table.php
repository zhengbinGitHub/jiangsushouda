<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateGroupTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
    	if(!Schema::hasTable('groups')) {
			Schema::create('groups', function (Blueprint $table) {
				$table->bigIncrements('id');
				$table->char('name', 20)->nullable(false)->index()->comment('分类名称');
				$table->integer('parent_id')->default(0)->index();
				$table->tinyInteger('level')->default(0);
				$table->tinyInteger('status')->default(1)->comment('1 开启 0 关闭');
				$table->string('alias', 20)->nullable(false);
				$table->string('memo')->nullable();
				$table->string('type', 10)->nullable(false)->comment('分类消息类型 channel、info');
				$table->timestamps();
			});
		}
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('groups');
    }
}
