<?php

namespace App\Actions;

use TCG\Voyager\Actions\AbstractAction;
use Maatwebsite\Excel\Facades\Excel;

class XlsExportFaqsAction extends AbstractAction
{

    public function massAction($ids, $comingFrom)
    {
        return Excel::download(new \App\Exports\FaqsExport($ids), 'faqs.xlsx');
    }

    public function getTitle()
    {
        return 'Выгрузить в Excell';
    }

    public function getIcon()
    {
        return 'voyager-download';
    }

    public function getPolicy()
    {
        return 'read';
    }

    public function getAttributes()
    {
        return [
            'class' => 'btn btn-warning',
            'style' => 'margin-top:2px'
        ];
    }

    public function shouldActionDisplayOnDataType()
    {
        return $this->dataType->slug == 'faqs';
    }

    public function getDefaultRoute()
    {
        return null;
    }
}
