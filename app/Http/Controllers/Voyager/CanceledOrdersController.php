<?php

namespace App\Http\Controllers\Voyager;

use Illuminate\Http\Request;
use TCG\Voyager\Facades\Voyager;

class CanceledOrdersController extends VoyagerBaseController
{
    public function index(Request $request)
    {
        $this->dataType = Voyager::model('DataType')->where('slug', '=', 'orders')->first();
        $this->dataType->scope = 'Canceled';
        $this->dataType->slug = 'canceled-orders';
        return parent::index($request);
    }
    public function create(Request $request)
    {
        $this->dataType = Voyager::model('DataType')->where('slug', '=', 'orders')->first();
        $this->dataType->scope = 'Canceled';
        $this->dataType->slug = 'canceled-orders';
        return parent::create($request);
    }
    public function store(Request $request)
    {
        $this->dataType = Voyager::model('DataType')->where('slug', '=', 'orders')->first();
        $this->dataType->scope = 'Canceled';
        $this->dataType->slug = 'canceled-orders';
        return parent::store($request);
    }
    public function show(Request $request, $id)
    {
        $this->dataType = Voyager::model('DataType')->where('slug', '=', 'orders')->first();
        $this->dataType->scope = 'Canceled';
        $this->dataType->slug = 'canceled-orders';
        return parent::show($request, $id);
    }
    public function edit(Request $request, $id)
    {
        $this->dataType = Voyager::model('DataType')->where('slug', '=', 'orders')->first();
        $this->dataType->scope = 'Canceled';
        $this->dataType->slug = 'canceled-orders';
        return parent::edit($request, $id);
    }
    public function update(Request $request, $id)
    {
        $this->dataType = Voyager::model('DataType')->where('slug', '=', 'orders')->first();
        $this->dataType->scope = 'Canceled';
        $this->dataType->slug = 'canceled-orders';
        return parent::update($request, $id);
    }
    public function destroy(Request $request, $id)
    {
        $this->dataType = Voyager::model('DataType')->where('slug', '=', 'orders')->first();
        $this->dataType->scope = 'Canceled';
        $this->dataType->slug = 'canceled-orders';
        return parent::destroy($request, $id);
    }
}
