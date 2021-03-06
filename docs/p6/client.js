var map;
var icono;

const coordenadas = {
  lat: 0,
  lng: 0,
};

const propiedades = {
  center: coordenadas,
  zoom: 20,
};

var data = [];

function iniciaMapa() {
  map = new google.maps.Map(document.getElementById("map"), propiedades);
  icono = {
    url:
      "https://bestmedia.mx/wp-content/uploads/2020/03/InexperiencedGlossyAsiaticgreaterfreshwaterclam-small.gif",
    scaledSize: new google.maps.Size(50, 50),
    origin: new google.maps.Point(0, 0),
    anchor: new google.maps.Point(0, 0),
  };

  data.push(returnData(21.15251404037929, -101.71156647971999));
  navigator.geolocation.getCurrentPosition((posicion) => {
    data.push(returnData(posicion.coords.latitude, posicion.coords.longitude));
  });

  var marker = returnMarker({ position: coordenadas });

  if (navigator.geolocation) {
    let i = 0;
    setInterval(() => {
      moverPosicion(data[i]);
      i++
      if (i==data.length) {
        i=0;
      }
    }, 3000);
  }
}
const returnData = (lat, lng) => {
  var position = { lat, lng };
  var marker = returnMarker({ position }, icono);
  return { position, marker };
};

const returnMarker = (d) => {
  return new google.maps.Marker({
    position: d.position,
    icon: icono,
    map: map,
  });
};

const moverPosicion = (datos) => {
  // marker.setPosition(pos);
    map.panTo(datos.position);
    map.setCenter(datos.position);
};
