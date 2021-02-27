<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

class CitiesController extends Controller
{
    public function search(Request $request)
    {
        $token = app()['config']->get('dadata.api');
        $secret = app()['config']->get('dadata.secret');
        $dadata = new \Dadata\DadataClient($token, $secret);
        $kwargs = [
            'from_bound' => ['value' => 'city'],
            'to_bound' => ['value' => 'city']
        ];

        $response = $dadata->suggest("address", $request->q, 10, $kwargs);

        return ['cities' => array_map(function ($value) {
            return $this->mutate($value);
        }, $response)];
    }
    public function mutate($dadata)
    {
        return ['city' => $dadata['data']['city'], 'value' => $dadata['value']];
    }
}
