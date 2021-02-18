<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use TCG\Voyager\Traits\Resizable;

class Lesson extends Model
{
    use HasFactory;
    use Resizable;

    public function scopeDogs($query)
    {
        return $query->where('kind', 'dog')->orderBy('number', 'asc');
    }

    public function scopeCats($query)
    {
        return $query->where('kind', 'cat')->orderBy('number', 'asc');
    }

    public function scopeAll($query)
    {
        return $query->orderBy('number', 'asc');
    }
}
