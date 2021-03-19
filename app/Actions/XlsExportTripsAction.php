<?php

namespace App\Actions;

use TCG\Voyager\Actions\AbstractAction;
use Maatwebsite\Excel\Facades\Excel;

class XlsExportTripsAction extends AbstractAction
{

    public function massAction($ids, $comingFrom)
    {
        return Excel::download(new \App\Exports\TripsExport($ids), 'trips.xlsx');
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
        return $this->dataType->slug == 'trips';
    }

    public function getDefaultRoute()
    {
        return null;
    }
}
