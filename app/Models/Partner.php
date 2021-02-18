<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Builder;
use TCG\Voyager\Traits\Resizable;

class Partner extends Model
{
    use HasFactory;
    use Resizable;
    
    public const PUBLISHED = 'PUBLISHED';

    /**
     * Scope a query to only published scopes.
     *
     * @param \Illuminate\Database\Eloquent\Builder $query
     *
     * @return \Illuminate\Database\Eloquent\Builder
     */
    public function scopePublished(Builder $query)
    {
        return $query->where('status', '=', static::PUBLISHED)->orderBy('sort', 'asc');
    }
}
