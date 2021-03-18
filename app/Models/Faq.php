<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Faq extends Model
{
    use HasFactory;
    protected $fillable = ['name', 'email', 'question', 'category'];


    static $statuses = [
        "new" => "Новый",
        "answered" => "Отработан",
        "confirmed" => "Показывать на сайте"
    ];

    static $categories = [
        "charity" => "Благотворительная программа",
        "dog" => "Памятка для влыдельцев собак",
        "cat" => "Памятка для влыдельцев кошек",
        "stock" => "Акция в магнит"
    ];
}
