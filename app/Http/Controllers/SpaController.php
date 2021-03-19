<?php

namespace App\Http\Controllers;

use App\Http\Resources\Faq as FaqResource;
use App\Models\Faq;
use App\Http\Resources\Post as PostResource;
use App\Models\Post;
use App\Http\Resources\Partner as PartnerResource;
use App\Models\Partner;
use App\Http\Resources\Pet as PetResource;
use App\Models\Pet;
use App\Http\Resources\City as CityResource;
use App\Models\City;
use App\Http\Resources\Lesson as LessonResource;
use App\Models\Lesson;
use Illuminate\Support\Facades\Cache;
use Illuminate\Support\Facades\DB;

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
        $app = Cache::rememberForever('app', function () {

            $app = ['data' => []];
            $app['data']['faqs'] = [
                'charity' => FaqResource::collection(Faq::where('status', 'confirmed')->where('category', 'charity')->get()),
                'dog' => FaqResource::collection(Faq::where('status', 'confirmed')->where('category', 'dog')->get()),
                'cat' => FaqResource::collection(Faq::where('status', 'confirmed')->where('category', 'cat')->get()),
                'stock' => FaqResource::collection(Faq::where('status', 'confirmed')->where('category', 'stock')->get()),
            ];

            $app['data']['youtube'] = setting('site.youtube');
            $app['data']['youtubeSchool'] = setting('site.youtube-school');

            $app['data']['vk'] = setting('site.vk');
            $app['data']['tiktok'] = setting('site.tiktok');
            $app['data']['instagram'] = setting('site.instagram');

            $app['data']['doubleLink'] = setting('site.double-link');
            $app['data']['volunteerLink'] = setting('site.volunteer-link');
            $app['data']['textAbout'] = setting('site.text-about');
            $app['data']['textRules'] = setting('site.text-rules');

            $app['data']['news'] = PostResource::collection(Post::published()->get());
            $app['data']['partners'] = PartnerResource::collection(Partner::published()->get());

            $app['data']['cities'] = CityResource::collection(City::all());
            $app['data']['pets'] = PetResource::collection(Pet::active());
            $app['data']['lessons'] = LessonResource::collection(Lesson::orderBy('number', 'asc')->get());

            return $app;
        });
        return view('spa', [
            'app' => $app
        ]);
    }
}
