<?php

namespace App\Exports;

use App\Models\Faq;
use Illuminate\Contracts\View\View;
use Maatwebsite\Excel\Concerns\FromView;

class FaqsExport implements FromView
{
    private $ids;

    public function __construct($ids = null)
    {
        $this->ids = $ids;
    }

    public function view(): View
    {
        return view('exports.faqs', [
            'faqs' => $this->ids ? Faq::whereIn('id', $this->ids)->get() : Faq::all()
        ]);
    }
}
