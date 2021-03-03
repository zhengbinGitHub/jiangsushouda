<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateArticleTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
    	if(!Schema::hasTable('articles')) {
			Schema::create('articles', function (Blueprint $table) {
				$table->bigIncrements('id');
				$table->char('title', 200)->nullable(false)->index();
				$table->string('memo')->nullable();
				$table->string('cover')->nullable();
				$table->integer('view')->default(0);
				$table->tinyInteger('is_hot')->default(0);
				$table->tinyInteger('status')->default(1);
				$table->integer('group_id')->default(0)->index();
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
        Schema::dropIfExists('articles');
    }
}
