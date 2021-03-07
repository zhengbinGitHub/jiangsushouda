<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateCommentTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
    	if(!Schema::hasTable('comments')) {
			Schema::create('comments', function (Blueprint $table) {
				$table->bigIncrements('id');
				$table->string('name', 30)->nullable(false);
				$table->string('email', 50)->nullable(false);
				$table->string('tel', 30)->nullable(false);
				$table->string('content')->nullable(false);
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
        Schema::dropIfExists('comments');
    }
}
