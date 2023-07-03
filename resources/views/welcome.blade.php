<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
    <head>
        <script type="text/javascript" src="https://api-maps.yandex.ru/2.1/?apikey=c3a23de0-9545-400b-959b-64a86ff57730&lang=ru_RU"></script>
        @vite(["resources/js/map.js", "resources/css/map.css"])
    </head>
    <body>
        <div id="map" class="map"></div>
    </body>
</html>
