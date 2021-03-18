<table>
    <thead>
        <tr>
            <td>Имя</td>
            <td>E-mail</td>
            <td>Вопрос</td>
            <td>Ответ</td>
            <td>Категория</td>
            <td>Дата/время</td>
            <td>Статус</td>
        </tr>
    </thead>
    <tbody>
        @foreach ($faqs as $faq)
            <tr>
                <td>{{ $faq->name }}</td>
                <td>{{ $faq->email }}</td>
                <td>{{ $faq->question }}</td>
                <td>{{ $faq->answer }}</td>
                <td>{{ \App\Models\Faq::$categories[$faq->category] }}</td>
                <td>{{ \Illuminate\Support\Carbon::parse($faq->created_at)->format('d.m.Y H:i') }}</td>
                <td>{{ \App\Models\Faq::$statuses[$faq->status] }}</td>
            </tr>
        @endforeach
    </tbody>
</table>
