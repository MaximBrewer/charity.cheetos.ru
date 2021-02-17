<?php

namespace App\Http\Controllers\Voyager;

use Illuminate\Http\Request;
use TCG\Voyager\Facades\Voyager;

class DogLessonsController extends VoyagerBaseController
{
    public function index(Request $request)
    {
        $this->dataType = Voyager::model('DataType')->where('slug', '=', 'lessons')->first();
        $this->dataType->scope = 'Dogs';
        $this->dataType->slug = 'dog-lessons';
        return parent::index($request);
    }
    public function create(Request $request)
    {
        $this->dataType = Voyager::model('DataType')->where('slug', '=', 'lessons')->first();
        $this->dataType->scope = 'Dogs';
        $this->dataType->slug = 'dog-lessons';
        return parent::create($request);
    }
    public function store(Request $request)
    {
        $this->dataType = Voyager::model('DataType')->where('slug', '=', 'lessons')->first();
        $this->dataType->scope = 'Dogs';
        $this->dataType->slug = 'dog-lessons';
        return parent::store($request);
    }
    public function show(Request $request, $id)
    {
        $this->dataType = Voyager::model('DataType')->where('slug', '=', 'lessons')->first();
        $this->dataType->scope = 'Dogs';
        $this->dataType->slug = 'dog-lessons';
        return parent::show($request, $id);
    }
    public function edit(Request $request, $id)
    {
        $this->dataType = Voyager::model('DataType')->where('slug', '=', 'lessons')->first();
        $this->dataType->scope = 'Dogs';
        $this->dataType->slug = 'dog-lessons';
        return parent::edit($request, $id);
    }
    public function update(Request $request, $id)
    {
        $this->dataType = Voyager::model('DataType')->where('slug', '=', 'lessons')->first();
        $this->dataType->scope = 'Dogs';
        $this->dataType->slug = 'dog-lessons';
        return parent::update($request, $id);
    }
    public function destroy(Request $request, $id)
    {
        $this->dataType = Voyager::model('DataType')->where('slug', '=', 'lessons')->first();
        $this->dataType->scope = 'Dogs';
        $this->dataType->slug = 'dog-lessons';
        return parent::destroy($request, $id);
    }
}

