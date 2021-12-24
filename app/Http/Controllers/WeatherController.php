<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class WeatherController extends Controller
{
    public $currentWeather;
    public $location;
    public $city;

    public function __construct($currentWeather, $location, $city)
    {
        $this->currentWeather = $currentWeather;
        $this->location = $location;
        $this->city = $city;
    }

    public function location(Request $request) {
        dd($request);
    }

}
