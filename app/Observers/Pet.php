<?php

namespace App\Observers;

use App\Models\Pet as Model;
use Illuminate\Support\Facades\Cache;

class Pet
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
