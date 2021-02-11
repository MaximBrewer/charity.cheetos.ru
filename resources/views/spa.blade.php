<!DOCTYPE html>
<html lang="{{ app()->getLocale() }}">

<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <!-- CSRF Token -->
    <meta name="csrf-token" content="{{ csrf_token() }}">

    <title>{{ config('app.name', 'Laravel') }}</title>

    <!-- Scripts -->
    <script>
        window.App = {!! json_encode([
            'name' => config('app.name')
        ]) !!};
    </script>

    <!-- Styles -->
    <link href="{{ asset('fonts/stylesheet.css') }}" rel="stylesheet">
    <link href="{{ asset('css/app.css?v1.0') }}" rel="stylesheet">
    
</head>

<body className="font-sans h-full text-grey-darkest">
    <div id="app" className="flex flex-col">
    </div>
    <script src="{{ asset('js/app.js?v1.0') }}" defer></script>
</body>

</html>
