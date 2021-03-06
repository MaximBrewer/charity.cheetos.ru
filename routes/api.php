<?php

use Illuminate\Support\Facades\Route;

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

Route::name('api.')->namespace('Api')->group(function () {
    // Unprotected routes

    Route::post('faq', 'FaqsController@store')
        // ->middleware('throttle:10,1')
        ->name('faq.store');

    Route::post('order', 'OrdersController@store')
        // ->middleware('throttle:10,1')
        ->name('order.store');

    Route::post('trip', 'TripsController@store')
        // ->middleware('throttle:10,1')
        ->name('trip.store');

    // Route::post('faq', 'FaqsController@store')
    //     // ->middleware('throttle:10,1')
    //     ->name('faq.store');

    Route::group(['middleware' => 'guest:api'], function () {
        Route::namespace('Auth')->group(function () {
            // Route::post('login', 'LoginController')->name('login');
            // Route::post('register', 'RegisterController')->name('register');

            // // Password Reset Routes...
            // Route::post('password/email', 'ForgotPasswordController@sendResetLinkEmail');
            // Route::post('password/reset', 'ResetPasswordController@reset');
        });
    });
    

    Route::post('/cities/search', 'CitiesController@search')->name('cities.search');

    // Protected routes
    Route::middleware('auth:api')->group(function () {
        //     Route::namespace('Auth')->group(function () {
        //         Route::get('me', 'MeController@me')->name('me');
        //         Route::post('logout', 'LogoutController@logout')->name('logout');
        //     });
    });
});
