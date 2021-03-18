<?php

namespace App\Exports;

use App\Models\Trip;
use Illuminate\Contracts\View\View;
use Maatwebsite\Excel\Concerns\FromView;

class TripsExport implements FromView
{
    public function view(): View
    {
        return view('exports.trips', [
            'trips' => Trip::all()
        ]);
    }
}
