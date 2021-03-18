<?php

namespace App\Exports;

use App\Models\Faq;
use Illuminate\Contracts\View\View;
use Maatwebsite\Excel\Concerns\FromView;

class FaqsExport implements FromView
{
    public function view(): View
    {
        return view('exports.faqs', [
            'faqs' => Faq::all()
        ]);
    }
}
