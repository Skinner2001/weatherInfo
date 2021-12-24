<?php

    use Illuminate\Support\Facades\Http;
    use Illuminate\Support\Facades\Route;

    /*
    |--------------------------------------------------------------------------
    | Web Routes
    |--------------------------------------------------------------------------
    |
    | Here is where you can register web routes for your application. These
    | routes are loaded by the RouteServiceProvider within a group which
    | contains the "web" middleware group. Now create something great!
    |
    */

    Route::post("city/{city}", function ($city) {
        $city = $_POST['search_city'];
        $location = $city;
        $apiKey = 'c815e7e6f6adf63781437395939c7e9d';

        $response = Http::get("https://api.openweathermap.org/data/2.5/weather?q={$location}&appid={$apiKey}&units=metric");
        $responsejson = $response->json();
        if ($responsejson['cod'] != 200) {
            abort(404);
        }

        return view('welcome', [
            'currentWeather' => $response->json(),
            'location' => $city,
        ]);
    });

    Route::post("latlong/", function () {
        $latitude = $_POST['latitude'];
        $longitude = $_POST['longitude'];
        $apiKey = 'c815e7e6f6adf63781437395939c7e9d';

        $response = Http::get("https://api.openweathermap.org/data/2.5/onecall?lat={$latitude}&lon={$longitude}&exclude=minutely,hourly&appid={$apiKey}&units=metric");

        return view('latlong', [
            'currentWeather' => $response->json(),
            'location' => 'Unknown',
            'latitude' => $latitude,
            'longitude' => $longitude,
        ]);
    });

    Route::get('/', function (Request $request) {

        $location = 'London';
        $apiKey = 'c815e7e6f6adf63781437395939c7e9d';

        $response = Http::get("https://api.openweathermap.org/data/2.5/weather?q={$location}&appid={$apiKey}&units=metric");

        //   dump($response->json());

        return view('welcome', [
            'currentWeather' => $response->json(),
            'location' => $location,
        ]);
    });


