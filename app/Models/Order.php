<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Order extends Model
{
    use HasFactory;
    protected $fillable = ['name', 'pet_id', 'surname', 'age', 'email', 'city', 'body', 'phone'];


    public function scopeNew($query)
    {
        return $query->where('status', 'new');
    }
    public function scopeCanceled($query)
    {
        return $query->where('status', 'canceled');
    }
    public function scopeFinished($query)
    {
        return $query->where('status', 'finished');
    }
    public function scopeConfirmed($query)
    {
        return $query->where('status', 'confirmed');
    }

}
