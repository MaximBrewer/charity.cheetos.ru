<?php

namespace App\Http\Controllers;

use App\Http\Resources\Faq as FaqResource;
use App\Models\Faq;
use Illuminate\Http\Request;

class SpaController extends Controller
{
    /**
     * Show the application dashboard.
     *
     * @return \Illuminate\Contracts\Support\Renderable
     */
    public function index()
    {
        $app = ['data' => []];
        $app['data']['faqs'] = FaqResource::collection(Faq::where('status', 'confirmed')->get());

        return view('spa', [
            'app' => $app
        ]);
    }
}
