<table>
    <thead>
        <tr>
            <td>Фонд</td>
            <td>Город</td>
            <td>Кол-во</td>
            <td>E-mail</td>
            <td>Дата/время</td>
        </tr>
    </thead>
    <tbody>
        @foreach ($trips as $trip)
            <tr>
                <td>{{ $trip->partner->title }}</td>
                <td>{{ $trip->city->title }}</td>
                <td>{{ $trip->quantity }}</td>
                <td>{{ $trip->email }}</td>
                <td>{{ \Illuminate\Support\Carbon::parse($trip->created_at)->format('d.m.Y H:i') }}</td>
            </tr>
        @endforeach
    </tbody>
</table>
