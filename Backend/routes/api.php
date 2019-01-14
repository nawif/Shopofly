<?php
// @codingStandardsIgnoreStart

use Illuminate\Http\Request;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::group([
    'prefix' => 'auth'
], function () {
    Route::post('login', 'AuthController@login');
    Route::post('logout', 'AuthController@logout');
    Route::post('refresh', 'AuthController@refresh');
    Route::post('me', 'AuthController@me');

});
Route::group([
    'prefix' => 'users'

], function () {
    Route::post('register','UserController@store');
});
Route::group([
    'prefix' => 'suppliers'

], function () {
    Route::post('register','SupplierController@store');
});
Route::group([
    'prefix' => 'store'

], function () {
    Route::post('addListing','ListingController@addListing');
    Route::get('item/{key}','ListingController@getListing');
    Route::get('SupplierItems/{id}','ListingController@getSupplierListing');
    Route::post('addListingImages/{key}','ListingController@addListingImages');


});
