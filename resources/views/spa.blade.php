<!DOCTYPE html>
<html lang="{{ app()->getLocale() }}">

<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <!-- CSRF Token -->
    <meta name="csrf-token" content="{{ csrf_token() }}">

    <title>{{ setting('site.title') }}</title>
    <meta name="description" content="{{ setting('site.description') }}">
    <meta property="og:title" content="{{ setting('site.title') }}" />
    <meta property="og:description" content="{{ setting('site.description') }}" />
    <meta property="og:url" content="http://charity.cheetos.ru" />
    <meta property="og:image" content="http://charity.cheetos.ru/public/apple-touch-icon.png" />

    <!-- Scripts -->
    <script>
        window.App = {!! json_encode($app); !!};
    </script>

    <!-- Styles -->
    <link href="{{ asset('fonts/stylesheet.css') }}" rel="stylesheet">
    <link href="{{ asset('css/app.css?v1.19') }}" rel="stylesheet">
    
</head>

<body className="font-sans h-full text-grey-darkest">
    <div id="app" class="flex flex-col select-none">
    </div>
    <script src="{{ asset('js/app.js?v1.19') }}" defer></script>
</body>

</html>
