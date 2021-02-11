

let longitude = -98.4936;
let latitude = 29.4700;
weather();

function weather() {
    $.get("http://api.openweathermap.org/data/2.5/onecall", {
        APPID: WEATHER_MAP_TOKEN,
        lat: latitude,
        lon: longitude,
        units: "imperial",
        exclude: "minutely,hourly"
    }).done(function (data) {
        handleResponse(data)
    });
}


function handleResponse(data) {
    console.log(data);
    let day = data.daily;
    let html = " ";
    for (let i = 0; i < 5; i++) {
        let date = day[i].dt;
        let dateCal = new Date (date * 1000);
        let dateEng = dateCal.toLocaleDateString("en-US");
        let wxIcon = day[i].weather[0].icon
        let dayHtml = '<div class="card car_bkgd" style="width: 14rem;">'
        dayHtml += '<div class="date_d">' + dateEng + '</div>';
        dayHtml += '<ul></ul>'
        // dayHtml += '<li <img src='http://openweathermap.org/img/w/' + wxIcon + '.png' + '</li>';
            dayHtml += '<li class="list_d">' + day[i].temp.max + ' / ' + day[i].temp.min + '</li>';
        dayHtml += '<li class="list_d">' + "Description: " + day[i].weather[0].description + '</li>';
        dayHtml += '<li class="list_d">' + "Humidity: " + day[i].humidity + '</li>';
        dayHtml += '<li class="list_d">' + "Wind: " + day[i].wind_speed + '</li>';
        dayHtml += '<li class="list_d">' + "Pressure: " + day[i].pressure + '</li>';
        dayHtml += '</div>';
        html += dayHtml;
    }
    $('#days').html(html);
}

mapboxgl.accessToken = mapboxToken;
let coordinates = document.getElementById('coordinates');
let map = new mapboxgl.Map({
    container: 'map', // container ID
    style: 'mapbox://styles/mapbox/streets-v11', // style URL
    center: [longitude, latitude], // starting position [lng, lat]
    zoom: 9 // starting zoom
});

let marker = new mapboxgl.Marker({
    draggable: true
})
    .setLngLat([longitude, latitude])
    .addTo(map);

function onDragEnd() {
    let lngLat = marker.getLngLat();
    longitude = lngLat.lng;
    latitude = lngLat.lat;
    weather();
}

marker.on('dragend', onDragEnd);

let nav = new mapboxgl.NavigationControl();
map.addControl(nav, 'bottom-right');

// $.get("https://api.openweathermap.org/data/2.5/onecall?lat=29.4241&lon=-98.4936&units=imperial&exclude=minutely,hourly&appid=" + WEATHER_MAP_TOKEN).done(weather);


