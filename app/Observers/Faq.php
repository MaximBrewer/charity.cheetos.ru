<?php

namespace App\Observers;

use App\Models\Faq as Model;
use Illuminate\Support\Facades\Cache;

class Faq
{
    public function created(Model $model)
    {
        if ($model->status == 'confirmed')
            Cache::flush();
    }

    public function updated(Model $model)
    {
        if ($model->status == 'confirmed')
            Cache::flush();
    }
    public function deleted(Model $model)
    {
        if ($model->status == 'confirmed')
            Cache::flush();
    }
}
