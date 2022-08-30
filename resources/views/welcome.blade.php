@extends ('components.layout')

@section ('content')
    <div class="container">
        <div class="row">
            <div class="col-md-12">
                <div class="row">
                    <div class="col-md-8">
                        <h1>
                            Current Weather from openWeather API
                        </h1>
                    </div>
                </div>
                <hr/>
                <div class="row">
                    <div class="col-sm-4">
                        <h2 style="font-family:Courier New;">
                            Location: <span style="color:springgreen">{{ $location }}</span>
                        </h2>
                        <h4>
                            Temperature: {{ $currentWeather['main']['temp'] }} &deg;C
                        </h4>
                        <h4>
                            Feels like: {{ $currentWeather['main']['feels_like'] }} &deg;C
                        </h4>
                        <h4>
                            Weather: {{ ucfirst($currentWeather['weather'][0]['description']) }}
                        </h4>
                        <h4>
                            Wind Speed: {{ $currentWeather['wind']['speed'] }} mph
                        </h4>
                        <h4>
                            Wind Direction: {{ $currentWeather['wind']['deg'] }} Degrees
                        </h4>
                    </div>
                    <div class="col-sm-4 text-right">
                        <h2>
                            <span>&nbsp;</span>
                        </h2>
                        <h4>
                            Pressure: {{ $currentWeather['main']['pressure'] }} atm
                        </h4>
                        <h4>
                            Humidity: {{ $currentWeather['main']['humidity'] }} %RH
                        </h4>
                        <div>
                            <img src="http://openweathermap.org/img/wn/{{ $currentWeather['weather'][0]['icon']  }}@4x.png"/>
                        </div>
                    </div>
                    <div class="col-sm-4">
                        <form action="" method="POST" id="form">
                            @csrf
                            <p>Enter a latitude and longitude below or simply enter a city name</p>
                            <input type="number" step="any" class="rounded-pill" name="latitude" id="latitude" placeholder="Latitude" onchange="latlong()"/>
                            <input type="number" step="any" class="rounded-pill" name="longitude" id="longitude" placeholder="Longitude" style="margin-bottom:20px;" onchange="latlong()"/>
                            <div class="d-grid gap-2">
                                <input type="text" id="search_city" class="rounded-pill" name="search_city" placeholder="Type a city name..." onkeyup="check()" value=""/>
                            </div>
                            <div class="d-grid gap-2">
                                <button type="submit" class="btn btn-lg btn-block btn-warning mt-4 rounded-pill" id="submit" disabled>Go!</button>
                            </div>

                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <script type="text/javascript">document.getElementById('form').search_city.focus();</script>
    <script>
        function check() {
            let frm = document.getElementById('form') || null;
            if (frm) {
                let text = document.getElementById('search_city').value;
                let latitude = document.getElementById('latitude').value;
                let longitude = document.getElementById('longitude').value;
                let submit = document.getElementById("submit");

                if (text != '' || (latitude != '' && longitude != '')) {
                    frm.action = '/city/' + text;
                    submit.disabled = false;
                }
            }
        }
        function latlong() {
            let latitude = document.getElementById('latitude').value;
            let longitude = document.getElementById('longitude').value;
            let submit = document.getElementById("submit");
            if (latitude != null && longitude != null) {
                let frm = document.getElementById('form');
                frm.action = '/latlong/';
                submit.disabled = false;
            }
        }
    </script>
@endsection
