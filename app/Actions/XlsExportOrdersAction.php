<?php

namespace App\Actions;

use TCG\Voyager\Actions\AbstractAction;
use Maatwebsite\Excel\Facades\Excel;

class XlsExportOrdersAction extends AbstractAction
{

    public function massAction($ids, $comingFrom)
    {
        if (empty($ids)) {
            if (strstr($comingFrom, 'new-orders')) {
                return Excel::download(new \App\Exports\OrdersExport('new'), 'orders.xlsx');
            } elseif (strstr($comingFrom, 'canceled-orders')) {
                return Excel::download(new \App\Exports\OrdersExport('canceled'), 'orders.xlsx');
            } elseif (strstr($comingFrom, 'accepted-orders')) {
                return Excel::download(new \App\Exports\OrdersExport('accepted'), 'orders.xlsx');
            } elseif (strstr($comingFrom, 'finished-orders')) {
                return Excel::download(new \App\Exports\OrdersExport('finished'), 'orders.xlsx');
            } else {
                return Excel::download(new \App\Exports\OrdersExport('all'), 'orders.xlsx');
            }
        } else {
            return Excel::download(new \App\Exports\OrdersExport('all', $ids), 'orders.xlsx');
        }
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
        return $this->dataType->model_name == 'App\Models\Order';
    }

    public function getDefaultRoute()
    {
        return null;
    }
}
