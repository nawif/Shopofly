<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateOrdersTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('orders', function (Blueprint $table) {
            $table->increments('id');
            $table->timestamps();
            $table->unsignedInteger('listing_id');
            $table->foreign('listing_id')
            ->references('id')->on('listings')
            ->onDelete('cascade');
            $table->string('status')->default('Order Placed');
            $table->unsignedInteger('user_id');
            $table->foreign('user_id')
            ->references('id')->on('users')
            ->onDelete('cascade');
            $table->unsignedInteger('address_id');
            $table->foreign('address_id')
            ->references('id')->on('addresses')
            ->onDelete('cascade');
            $table->unsignedInteger('delivery_id');
            $table->foreign('delivery_id')
            ->references('id')->on('deliveries')
            ->onDelete('cascade');
            $table->integer('quantity')->unsigned();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('orders');
    }
}
