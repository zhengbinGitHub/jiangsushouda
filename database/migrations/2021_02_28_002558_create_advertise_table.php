<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateAdvertiseTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
    	if(!Schema::hasTable('advertises')) {
			Schema::create('advertises', function (Blueprint $table) {
				$table->bigIncrements('id');
				$table->string('title')->nullable(false);
				$table->string('pic_url')->nullable(false);
				$table->string('link')->nullable(false);
				$table->tinyInteger('status')->default(1);
				$table->tinyInteger('is_index')->default(0);
				$table->tinyInteger('is_channel')->default(0);
				$table->tinyInteger('is_info')->default(0);
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
        Schema::dropIfExists('advertises');
    }
}
