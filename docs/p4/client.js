const obtieneUbicacion = () => {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(muestraPosicion);
  } else {
    alert("No");
  }
}

const muestraPosicion = (posicion) => {
    var coordenadas =
      posicion.coords.latitude + "," + posicion.coords.longitude;

    var imagenurl =
      "https://maps.googleapis.com/maps/api/staticmap?center=" +
      coordenadas +
      "&zoom=20&size=800x800&key=AIzaSyDnY8kMwai0w66KFgVDfGoFom4BfJ-hkM0";

      document.getElementById("imgMapa").src = imagenurl;
  }