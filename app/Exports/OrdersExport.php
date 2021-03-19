<?php

namespace App\Exports;

use App\Models\Order;
use Illuminate\Contracts\View\View;
use Maatwebsite\Excel\Concerns\FromView;

class OrdersExport implements FromView
{

    private $ids;
    private $scope;

    public function __construct($scope, $ids = null)
    {
        $this->scope = $scope;
        $this->ids = $ids;
    }

    public function view(): View
    {
        $orders = !empty($this->ids) ? Order::whereIn('id', $this->ids)->get() : ($this->scope == 'all' ? Order::all() : Order::{$this->scope}()->get());
        return view('exports.orders', [
            'orders' =>  $orders
        ]);
    }
}
