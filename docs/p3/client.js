var x = document.getElementById("demo");

function getLocation() {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(showPosition);
  } else {
    x.innerHTML = "El navegador no dispone la capacidad de geolocalización";
  }
}

function showPosition(position) {
    x.innerHTML =
    "<li>Latitude: " +
    position.coords.latitude +
    "</li><li>Longitude: " +
    position.coords.longitude +
    "</li>";
}
