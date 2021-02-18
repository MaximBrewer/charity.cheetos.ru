<?php

use Illuminate\Support\Facades\Route;
use TCG\Voyager\Facades\Voyager;

use Illuminate\Support\Str;
use TCG\Voyager\Events\Routing;
use TCG\Voyager\Events\RoutingAdmin;
use TCG\Voyager\Events\RoutingAdminAfter;
use TCG\Voyager\Events\RoutingAfter;
/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::group(['prefix' => 'admin'], function () {
    Voyager::routes();

    $namespacePrefix = '\\' . config('voyager.controllers.namespace') . '\\';
    Route::group(['middleware' => 'admin.user'], function () use ($namespacePrefix) {
        event(new RoutingAdmin());

        // GET	/photos/{photo}/comments	index	photos.comments.index
        // GET	/photos/{photo}/comments/create	create	photos.comments.create
        // POST	/photos/{photo}/comments	store	photos.comments.store
        // GET	/comments/{comment}	show	comments.show
        // GET	/comments/{comment}/edit	edit	comments.edit
        // PUT/PATCH	/comments/{comment}	update	comments.update
        // DELETE	/comments/{comment}	destroy	comments.destroy

        Route::get('cat-lessons', \Voyager\CatLessonsController::class . '@index')->name('voyager.cat-lessons.index');
        Route::get('cat-lessons/create', \Voyager\CatLessonsController::class . '@create')->name('voyager.cat-lessons.create');
        Route::post('cat-lessons', \Voyager\CatLessonsController::class . '@store')->name('voyager.cat-lessons.store');
        Route::get('cat-lessons/{id}', \Voyager\CatLessonsController::class . '@show')->name('voyager.cat-lessons.show');
        Route::get('cat-lessons/{id}/edit', \Voyager\CatLessonsController::class . '@edit')->name('voyager.cat-lessons.edit');
        Route::put('cat-lessons/{id}', \Voyager\CatLessonsController::class . '@update')->name('voyager.cat-lessons.update');
        Route::delete('cat-lessons/{id}', \Voyager\CatLessonsController::class . '@destroy')->name('voyager.cat-lessons.destroy');
        Route::get('cat-lessons/order', \Voyager\CatLessonsController::class . '@order')->name('voyager.cat-lessons.order');
        Route::post('cat-lessons/action', \Voyager\CatLessonsController::class . '@action')->name('voyager.cat-lessons.action');
        Route::post('cat-lessons/order', \Voyager\CatLessonsController::class . '@update_order')->name('voyager.cat-lessons.update_order');
        Route::get('cat-lessons/{id}/restore', \Voyager\CatLessonsController::class . '@restore')->name('voyager.cat-lessons.restore');
        Route::get('cat-lessons/relation', \Voyager\CatLessonsController::class . '@relation')->name('voyager.cat-lessons.relation');
        Route::post('cat-lessons/remove', \Voyager\CatLessonsController::class . '@remove_media')->name('voyager.cat-lessons.media.remove');

        Route::get('dog-lessons', \Voyager\DogLessonsController::class . '@index')->name('voyager.dog-lessons.index');
        Route::get('dog-lessons/create', \Voyager\DogLessonsController::class . '@create')->name('voyager.dog-lessons.create');
        Route::post('dog-lessons', \Voyager\DogLessonsController::class . '@store')->name('voyager.dog-lessons.store');
        Route::get('dog-lessons/{id}', \Voyager\DogLessonsController::class . '@show')->name('voyager.dog-lessons.show');
        Route::get('dog-lessons/{id}/edit', \Voyager\DogLessonsController::class . '@edit')->name('voyager.dog-lessons.edit');
        Route::put('dog-lessons/{id}', \Voyager\DogLessonsController::class . '@update')->name('voyager.dog-lessons.update');
        Route::delete('dog-lessons/{id}', \Voyager\DogLessonsController::class . '@destroy')->name('voyager.dog-lessons.destroy');
        Route::get('dog-lessons/order', \Voyager\DogLessonsController::class . '@order')->name('voyager.dog-lessons.order');
        Route::post('dog-lessons/action', \Voyager\DogLessonsController::class . '@action')->name('voyager.dog-lessons.action');
        Route::post('dog-lessons/order', \Voyager\DogLessonsController::class . '@update_order')->name('voyager.dog-lessons.update_order');
        Route::get('dog-lessons/{id}/restore', \Voyager\DogLessonsController::class . '@restore')->name('voyager.dog-lessons.restore');
        Route::get('dog-lessons/relation', \Voyager\DogLessonsController::class . '@relation')->name('voyager.dog-lessons.relation');
        Route::post('dog-lessons/remove', \Voyager\DogLessonsController::class . '@remove_media')->name('voyager.dog-lessons.media.remove');

        Route::get('common-lessons', \Voyager\CommonLessonsController::class . '@index')->name('voyager.common-lessons.index');
        Route::get('common-lessons/create', \Voyager\CommonLessonsController::class . '@create')->name('voyager.common-lessons.create');
        Route::post('common-lessons', \Voyager\CommonLessonsController::class . '@store')->name('voyager.common-lessons.store');
        Route::get('common-lessons/{id}', \Voyager\CommonLessonsController::class . '@show')->name('voyager.common-lessons.show');
        Route::get('common-lessons/{id}/edit', \Voyager\CommonLessonsController::class . '@edit')->name('voyager.common-lessons.edit');
        Route::put('common-lessons/{id}', \Voyager\CommonLessonsController::class . '@update')->name('voyager.common-lessons.update');
        Route::delete('common-lessons/{id}', \Voyager\CommonLessonsController::class . '@destroy')->name('voyager.common-lessons.destroy');
        Route::get('common-lessons/order', \Voyager\CommonLessonsController::class . '@order')->name('voyager.common-lessons.order');
        Route::post('common-lessons/action', \Voyager\CommonLessonsController::class . '@action')->name('voyager.common-lessons.action');
        Route::post('common-lessons/order', \Voyager\CommonLessonsController::class . '@update_order')->name('voyager.common-lessons.update_order');
        Route::get('common-lessons/{id}/restore', \Voyager\CommonLessonsController::class . '@restore')->name('voyager.common-lessons.restore');
        Route::get('common-lessons/relation', \Voyager\CommonLessonsController::class . '@relation')->name('voyager.common-lessons.relation');
        Route::post('common-lessons/remove', \Voyager\CommonLessonsController::class . '@remove_media')->name('voyager.common-lessons.media.remove');

        event(new RoutingAdminAfter());
    });
});

Route::get('/{uri?}', '\App\Http\Controllers\SpaController@index')->where('uri', '(.*)');
