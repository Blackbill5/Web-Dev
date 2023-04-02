let place_name = "New Delhi";
let key = "56b8f029e196603104f9d68b4ce1ac6f";

function func() {
    let place = document.getElementById("searcher"); //searcher = input field toh place me humare input field aa gye
    place_name = place.value;  //.value se search bar ke poori value aa gye
    console.log(place_name);
    fetchWeather();
}
async function fetchWeather()
{
    let url =
    "https://api.openweathermap.org/data/2.5/weather?q=" +
    place_name +
    "&appid=" +
    key +
    "&units=metric";   //unit converted from kelvin to cel
    const res = await fetch(url);
    const data = await res.json();
    const { name } = data;       //const name = data.name
    const { temp } = data.main;   //data temp = data.name.main
    document.getElementById("Weatherin").innerHTML = "Weather in " + name;
    document.getElementById("Temp").innerHTML = temp + "*C";
}

fetchWeather();