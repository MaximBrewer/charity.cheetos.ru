<?php

namespace App\Providers;

use Illuminate\Support\ServiceProvider;

class AppServiceProvider extends ServiceProvider
{
    /**
     * Bootstrap any application services.
     *
     * @return void
     */
    public function boot()
    {
        \App\Models\City::observe(\App\Observers\City::class);
        \App\Models\Lesson::observe(\App\Observers\Lesson::class);
        \App\Models\Order::observe(\App\Observers\Order::class);
        \App\Models\Partner::observe(\App\Observers\Partner::class);
        \App\Models\Pet::observe(\App\Observers\Pet::class);
        \App\Models\Post::observe(\App\Observers\Post::class);

        \App\Models\Faq::observe(\App\Observers\Faq::class);
        \App\User::observe(\App\Observers\User::class);
    }

    /**
     * Register any application services.
     *
     * @return void
     */
    public function register()
    {
        //
    }
}
