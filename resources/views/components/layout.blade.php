<!doctype html>

<title>Current Weather from openWeather API</title>
<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" crossorigin="anonymous">
<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js" integrity="sha384-MrcW6ZMFYlzcLA8Nl+NtUVF0sA7MsXsP1UyJoMp4YLEuNSfAP+JcXn/tWtIaxVXM" crossorigin="anonymous"></script>
<style>
    body {
        margin-top:1%;
        height:100%;
        color: white;
        /* Permalink - use to edit and share this gradient: https://colorzilla.com/gradient-editor/#7abcff+0,60abf8+44,0041f4+100 */
        background: #7abcff; /* Old browsers */
        background: -moz-linear-gradient(45deg,  #7abcff 0%, #9caeff 44%, #0041f4 100%); /* FF3.6-15 */
        background: -webkit-linear-gradient(45deg,  #7abcff 0%, #9caeff 44%,#0041f4 100%); /* Chrome10-25,Safari5.1-6 */
        background: linear-gradient(45deg,  #7abcff 0%, #9caeff 44%,#0041f4 100%); /* W3C, IE10+, FF16+, Chrome26+, Opera12+, Safari7+ */
        filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#7abcff', endColorstr='#0041f4',GradientType=1 ); /* IE6-9 fallback on horizontal gradient */
        background-repeat: no-repeat;
        background-size: cover;
        margin-bottom:32%;
    }
    input {
        padding: 10px;
    }
    label {
        display:flex;
        flex-direction:column;
    }
    p {
        font-size:1.4rem;
    }
    h2 {
        color:  white;
        animation-name: example2;
        animation-duration: 2s;
        font-family: "Courier";
        font-weight:bold;
    }
    h4 {
        color:  white;
        animation-name: example;
        animation-duration: 4s;
        padding: 10px;
    }
    h4:first-of-type {
        margin-top:5%;
    }

    input {
        padding: 10px;
    }
    canvas {
        background-color: #5079FA;
    }
    .zoom {
        padding: 50px;
        transition: transform .2s; /* Animation */
        cursor: pointer;
        margin: 0 auto;
    }

    @keyframes example {
        from {color: #66AFF9;}
        to {color: white;}
    }
    @keyframes example2 {
        from {opacity: 0;color:darkred}
        to {opacity: 1;color:white}
    }
    .zoom:hover {
        transform: scale(2.0); /* (150% zoom - Note: if the zoom is too large, it will go outside of the viewport) */
    }
</style>
<body>
    @yield('content')
</body>
