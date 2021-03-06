<?php

use Illuminate\Support\Facades\Route;
use TCG\Voyager\Facades\Voyager;

use Illuminate\Support\Str;
use TCG\Voyager\Events\Routing;
use TCG\Voyager\Events\RoutingAdmin;
use TCG\Voyager\Events\RoutingAdminAfter;
use TCG\Voyager\Events\RoutingAfter;
use Maatwebsite\Excel\Facades\Excel;
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

        // Route::get('xls/orders', function () {
        //     return Excel::download(new \App\Exports\OrdersExport, 'orders.xlsx');
        // })->name('voyager.xls.orders');

        Route::get('xls/trips', function () {
            return Excel::download(new \App\Exports\TripsExport, 'trips.xlsx');
        })->name('voyager.xls.trips');

        Route::get('xls/questions', function () {
            return Excel::download(new \App\Exports\FaqsExport, 'questions.xlsx');
        })->name('voyager.xls.questions');

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


        Route::get('new-orders', \Voyager\NewOrdersController::class . '@index')->name('voyager.new-orders.index');
        Route::get('new-orders/create', \Voyager\NewOrdersController::class . '@create')->name('voyager.new-orders.create');
        Route::post('new-orders', \Voyager\NewOrdersController::class . '@store')->name('voyager.new-orders.store');
        Route::get('new-orders/{id}', \Voyager\NewOrdersController::class . '@show')->name('voyager.new-orders.show');
        Route::get('new-orders/{id}/edit', \Voyager\NewOrdersController::class . '@edit')->name('voyager.new-orders.edit');
        Route::put('new-orders/{id}', \Voyager\NewOrdersController::class . '@update')->name('voyager.new-orders.update');
        Route::delete('new-orders/{id}', \Voyager\NewOrdersController::class . '@destroy')->name('voyager.new-orders.destroy');
        Route::get('new-orders/order', \Voyager\NewOrdersController::class . '@order')->name('voyager.new-orders.order');
        Route::post('new-orders/action', \Voyager\NewOrdersController::class . '@action')->name('voyager.new-orders.action');
        Route::post('new-orders/order', \Voyager\NewOrdersController::class . '@update_order')->name('voyager.new-orders.update_order');
        Route::get('new-orders/{id}/restore', \Voyager\NewOrdersController::class . '@restore')->name('voyager.new-orders.restore');
        Route::get('new-orders/relation', \Voyager\NewOrdersController::class . '@relation')->name('voyager.new-orders.relation');
        Route::post('new-orders/remove', \Voyager\NewOrdersController::class . '@remove_media')->name('voyager.new-orders.media.remove');

        Route::get('canceled-orders', \Voyager\CanceledOrdersController::class . '@index')->name('voyager.canceled-orders.index');
        Route::get('canceled-orders/create', \Voyager\CanceledOrdersController::class . '@create')->name('voyager.canceled-orders.create');
        Route::post('canceled-orders', \Voyager\CanceledOrdersController::class . '@store')->name('voyager.canceled-orders.store');
        Route::get('canceled-orders/{id}', \Voyager\CanceledOrdersController::class . '@show')->name('voyager.canceled-orders.show');
        Route::get('canceled-orders/{id}/edit', \Voyager\CanceledOrdersController::class . '@edit')->name('voyager.canceled-orders.edit');
        Route::put('canceled-orders/{id}', \Voyager\CanceledOrdersController::class . '@update')->name('voyager.canceled-orders.update');
        Route::delete('canceled-orders/{id}', \Voyager\CanceledOrdersController::class . '@destroy')->name('voyager.canceled-orders.destroy');
        Route::get('canceled-orders/order', \Voyager\CanceledOrdersController::class . '@order')->name('voyager.canceled-orders.order');
        Route::post('canceled-orders/action', \Voyager\CanceledOrdersController::class . '@action')->name('voyager.canceled-orders.action');
        Route::post('canceled-orders/order', \Voyager\CanceledOrdersController::class . '@update_order')->name('voyager.canceled-orders.update_order');
        Route::get('canceled-orders/{id}/restore', \Voyager\CanceledOrdersController::class . '@restore')->name('voyager.canceled-orders.restore');
        Route::get('canceled-orders/relation', \Voyager\CanceledOrdersController::class . '@relation')->name('voyager.canceled-orders.relation');
        Route::post('canceled-orders/remove', \Voyager\CanceledOrdersController::class . '@remove_media')->name('voyager.canceled-orders.media.remove');

        Route::get('finished-orders', \Voyager\FinishedOrdersController::class . '@index')->name('voyager.finished-orders.index');
        Route::get('finished-orders/create', \Voyager\FinishedOrdersController::class . '@create')->name('voyager.finished-orders.create');
        Route::post('finished-orders', \Voyager\FinishedOrdersController::class . '@store')->name('voyager.finished-orders.store');
        Route::get('finished-orders/{id}', \Voyager\FinishedOrdersController::class . '@show')->name('voyager.finished-orders.show');
        Route::get('finished-orders/{id}/edit', \Voyager\FinishedOrdersController::class . '@edit')->name('voyager.finished-orders.edit');
        Route::put('finished-orders/{id}', \Voyager\FinishedOrdersController::class . '@update')->name('voyager.finished-orders.update');
        Route::delete('finished-orders/{id}', \Voyager\FinishedOrdersController::class . '@destroy')->name('voyager.finished-orders.destroy');
        Route::get('finished-orders/order', \Voyager\FinishedOrdersController::class . '@order')->name('voyager.finished-orders.order');
        Route::post('finished-orders/action', \Voyager\FinishedOrdersController::class . '@action')->name('voyager.finished-orders.action');
        Route::post('finished-orders/order', \Voyager\FinishedOrdersController::class . '@update_order')->name('voyager.finished-orders.update_order');
        Route::get('finished-orders/{id}/restore', \Voyager\FinishedOrdersController::class . '@restore')->name('voyager.finished-orders.restore');
        Route::get('finished-orders/relation', \Voyager\FinishedOrdersController::class . '@relation')->name('voyager.finished-orders.relation');
        Route::post('finished-orders/remove', \Voyager\FinishedOrdersController::class . '@remove_media')->name('voyager.finished-orders.media.remove');

        Route::get('accepted-orders', \Voyager\AcceptedOrdersController::class . '@index')->name('voyager.accepted-orders.index');
        Route::get('accepted-orders/create', \Voyager\AcceptedOrdersController::class . '@create')->name('voyager.accepted-orders.create');
        Route::post('accepted-orders', \Voyager\AcceptedOrdersController::class . '@store')->name('voyager.accepted-orders.store');
        Route::get('accepted-orders/{id}', \Voyager\AcceptedOrdersController::class . '@show')->name('voyager.accepted-orders.show');
        Route::get('accepted-orders/{id}/edit', \Voyager\AcceptedOrdersController::class . '@edit')->name('voyager.accepted-orders.edit');
        Route::put('accepted-orders/{id}', \Voyager\AcceptedOrdersController::class . '@update')->name('voyager.accepted-orders.update');
        Route::delete('accepted-orders/{id}', \Voyager\AcceptedOrdersController::class . '@destroy')->name('voyager.accepted-orders.destroy');
        Route::get('accepted-orders/order', \Voyager\AcceptedOrdersController::class . '@order')->name('voyager.accepted-orders.order');
        Route::post('accepted-orders/action', \Voyager\AcceptedOrdersController::class . '@action')->name('voyager.accepted-orders.action');
        Route::post('accepted-orders/order', \Voyager\AcceptedOrdersController::class . '@update_order')->name('voyager.accepted-orders.update_order');
        Route::get('accepted-orders/{id}/restore', \Voyager\AcceptedOrdersController::class . '@restore')->name('voyager.accepted-orders.restore');
        Route::get('accepted-orders/relation', \Voyager\AcceptedOrdersController::class . '@relation')->name('voyager.accepted-orders.relation');
        Route::post('accepted-orders/remove', \Voyager\AcceptedOrdersController::class . '@remove_media')->name('voyager.accepted-orders.media.remove');

        event(new RoutingAdminAfter());
    });
});


Route::get('/{uri?}', '\App\Http\Controllers\SpaController@index')->where('uri', '(.*)');
