<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateLessonsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('lessons', function (Blueprint $table) {
            $table->id();
            $table->string('title');
            $table->integer('number')->default(1);
            $table->text('excerpt')->nullable();
            $table->text('body')->nullable();
            $table->string('video')->nullable();
            $table->string('image')->nullable();
            $table->text('prologue')->nullable();
            $table->enum('kind', ['dog', 'cat', 'common']);
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('lessons');
    }
}
