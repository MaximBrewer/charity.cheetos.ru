<?php

namespace App\Observers;

use App\User as Model;
use Illuminate\Support\Facades\Cache;

class User
{
    public function created(Model $model)
    {
        Cache::flush();
    }

    public function updated(Model $model)
    {
        Cache::flush();
    }

    public function deleted(Model $model)
    {
        Cache::flush();
    }
}
