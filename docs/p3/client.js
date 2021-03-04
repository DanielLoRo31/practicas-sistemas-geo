var x = document.getElementById("demo");

const getLocation = () => {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(showPosition);
  } else {
    x.innerHTML = "El navegador no dispone la capacidad de geolocalización";
  }
}

const showPosition = (position) => {
    x.innerHTML =
    "<li>Latitude: " +
    position.coords.latitude +
    "</li><li>Longitude: " +
    position.coords.longitude +
    "</li>";
}
