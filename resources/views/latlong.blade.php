@extends ('components.layout')
@php
    GLOBAL $day;
    GLOBAL $daily;
    $day = 0;
@endphp
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
                    <div class="col">
                        <h4 style="font-family:Courier New;display:inline;">
                            Latitude: <span style="color:springgreen">{{ $latitude }}</span> Longitude: <span style="color:springgreen">{{ $longitude }}</span> Timezone: <span
                                style="color:springgreen">{{ $currentWeather['timezone'] }}</span>
                        </h4>
                    </div>
                </div>
                @foreach ($currentWeather['daily'] as $daily)
                    <div class="row mt-2">
                        <div class="col-sm-4 mt-1">
                            <h4>
                                Day: {{ $day }}
                            </h4>
                            <h4>
                                Temperature: {{ $daily['temp']['day'] }} &deg;C
                            </h4>
                            <div>
                                @php
                                    global $daily;
                                    $morn = $daily['temp']['morn'];
                                    $eve = $daily['temp']['morn'];
                                    $night = $daily['temp']['night'];
                                    $daytemp = $daily['temp']['day'];
                                @endphp
                                <canvas id="myCanvas{{$day}}" width="276" height="70" style="margin-left:3%;border: 0.5px solid lightgrey;border-radius:8px;padding:10px;" class="zoom">
                                    Your browser does not support the canvas element.
                                </canvas>
                                <script>
                                    var temps = [{{$morn}}, {{$daytemp}}, {{$eve}}, {{$night}}];
                                    var colours = ["red", "orange", "yellow", "green"];
                                    var times = ["Morn", "Day", "Eve", "Night"];
                                    for (var a = 0; a < 4; a++)
                                    {
                                        var canvas = document.getElementById("myCanvas{{$day}}");
                                        var ctx = canvas.getContext("2d");
                                        ctx.font = "9pt Arial";
                                        ctx.fillStyle = colours[a];
                                        ctx.fillRect(a * 70, 70 - temps[a] * 2,68, temps[a] * 2);
                                        ctx.fillStyle = "white";
                                        ctx.fillText(times[a] + ":" + temps[a] + "\xB0", a * 70, 10);
                                    }
                                </script>
                            </div>
                            <h4>
                                Feels like: {{ $daily['feels_like']['day'] }} &deg;C
                            </h4>
                            <h4>
                                Weather: {{ ucfirst($daily['weather'][0]['description']) }}
                            </h4>
                            <h4>
                                Wind Speed: {{ $daily['wind_speed'] }} mph
                            </h4>
                            <h4>
                                Wind Direction: {{ $daily['wind_deg'] }} Degrees
                            </h4>
                        </div>
                        <div class="col-sm-4 mt-1">
                            <h4>
                                &nbsp;
                            </h4>
                            <h4>
                                Pressure: {{ $daily['pressure'] }} atm
                            </h4>
                            <h4>
                                Humidity: {{ $daily['humidity'] }} %RH
                            </h4>
                            <div class="text-right">
                                <img class="responsive" src="http://openweathermap.org/img/wn/{{ $daily['weather'][0]['icon']  }}@4x.png"/>
                            </div>
                        </div>
                        @if ($day == 0)
                            <div class="col-sm-4">
                                <form action="" method="POST" id="form">
                                    @csrf
                                    <p>Enter a latitude and longitude below or simply enter a city name</p>
                                    <input type="number" step="any" class="rounded-pill" name="latitude" id="latitude" placeholder="Latitude" onchange="latlong()"/>
                                    <input type="number" step="any" class="rounded-pill" name="longitude" id="longitude" placeholder="Longitude" style="margin-bottom:20px;" onchange="latlong()"/>
                                    <div class="d-grid gap-2">
                                        <input type="text" class="rounded-pill" id="search_city" name="search_city" placeholder="Type a city name..." onkeyup="check()" value=""/>
                                    </div>
                                    <div class="d-grid gap-2">
                                        <button type="submit" id="submit" class="btn btn-lg btn-block btn-warning mt-4 rounded-pill" disabled>Go!</button>
                                    </div>
                                </form>
                            </div>
                        @endif
                    </div>
                    @php
                        global $day;
                        $day++;
                    @endphp
                @endforeach
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
                // alert(frm.action);
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
