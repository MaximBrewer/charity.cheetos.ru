<?php

namespace App\Exports;

use App\Models\Trip;
use Illuminate\Contracts\View\View;
use Maatwebsite\Excel\Concerns\FromView;

class TripsExport implements FromView
{
    private $ids;

    public function __construct($ids = null)
    {
        $this->ids = $ids;
    }

    public function view(): View
    {
        return view('exports.trips', [
            'trips' => $this->ids ? Trip::whereIn('id', $this->ids)->get() : Trip::all()
        ]);
    }
}
