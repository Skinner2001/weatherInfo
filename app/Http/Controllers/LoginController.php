<?php
namespace App\Http\Controllers;

use Illuminate\Http\Request;
use DB;
use Illuminate\Support\Facades\Http;
class LoginController extends Controller
{

    public function verify(Request $request) {
        $username = $request->username;
        $password = $request->password;
        $users = DB::select("select * from users WHERE email = ?", [$username]);
        if (!empty($users)) {
            $location = 'London';
            $apiKey = 'c815e7e6f6adf63781437395939c7e9d';
            $response = Http::get("https://api.openweathermap.org/data/2.5/weather?q={$location}&appid={$apiKey}&units=metric");
            //   dump($response->json());
            return view('welcome', [
                'currentWeather' => $response->json(),
                'location' => $location,
            ]);
        } else {
            echo "Not found";
        }

    }

}
