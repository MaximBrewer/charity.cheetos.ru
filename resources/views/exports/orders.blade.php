<table>
    <thead>
        <tr>
            <td>Фонд</td>
            <td>Кличка</td>
            <td>Имя</td>
            <td>Фамилия</td>
            <td>Возвраст</td>
            <td>Город</td>
            <td>Телефон</td>
            <td>E-mail</td>
            <td>Сообщение</td>
            <td>Дата/время</td>
            <td>Статус</td>
        </tr>
    </thead>
    <tbody>
        @foreach ($orders as $order)
            <tr>
                <td>{{ $order->pet->partner->title }}</td>
                <td>{{ $order->pet->name }}</td>
                <td>{{ $order->name }}</td>
                <td>{{ $order->surname }}</td>
                <td>{{ $order->age }}</td>
                <td>{{ $order->city }}</td>
                <td>{{ $order->phone }}</td>
                <td>{{ $order->email }}</td>
                <td>{{ $order->body }}</td>
                <td>{{ \Illuminate\Support\Carbon::parse($order->created_at)->format('d.m.Y H:i') }}</td>
                <td>
                    {{ \App\Models\Order::$statuses[$order->status] }}
                </td>
            </tr>
        @endforeach
    </tbody>
</table>
