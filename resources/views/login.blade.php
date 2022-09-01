@extends ('components.layout')

@section ('content')
    <div class="container">
        <div class="row">
            <div class="col-md-12">
                <div class="row">
                    <div class="col-md-8">
                        <h1>
                            Please Login
                        </h1>
                    </div>
                </div>
                <hr/>
                <div class="row">
                    <div class="col-md-12">
                        <form action="/loginvalidate" method="POST" id="form">
                            @csrf
                            <label>
                                Username
                                <input type="text" placeholder="Username" name="username"/>
                            </label>
                            <label>
                                Password
                                <input type="password" name="password"/>
                            </label>
                            <button type="submit">Submit</button>
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
