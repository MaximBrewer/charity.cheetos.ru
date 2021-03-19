<?php

namespace App\Exports;

use App\Models\Order;
use Illuminate\Contracts\View\View;
use Maatwebsite\Excel\Concerns\FromView;

class OrdersExport implements FromView
{

    private $ids;

    public function __construct($ids = null)
    {
        $this->ids = $ids;
    }

    public function view(): View
    {
        return view('exports.orders', [
            'orders' => $this->ids ? Order::whereIn('id', $this->ids)->get() : Order::all()
        ]);
    }
}
