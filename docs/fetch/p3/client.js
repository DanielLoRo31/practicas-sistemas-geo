var coordenadas = {
  lat: 0,
  lng: 0,
};

var propiedades = {
  center: coordenadas,
  zoom: 2,
};

function obtieneMarcadores() {
  const markers = [
    {
      name: "México",
      longitude: "-99.1276",
      latitude: "19.427",
    },
    {
      name: "Brazil",
      longitude: "-47.9292",
      latitude: "-15.7801",
    },
    {
      name: "España",
      longitude: "-3.70327",
      latitude: "40.4167",
    },
  ];

  return markers;
}

function iniciaMapa() {
  const map = new google.maps.Map(document.getElementById("map"), propiedades);

  const marcadores = obtieneMarcadores();
  let icono = {
    url:
      "https://bestmedia.mx/wp-content/uploads/2020/03/InexperiencedGlossyAsiaticgreaterfreshwaterclam-small.gif",
    scaledSize: new google.maps.Size(40, 40),
    origin: new google.maps.Point(0, 0),
    anchor: new google.maps.Point(20, 35),
  };
  
  for (marcador of marcadores) {
    new google.maps.Marker({
      map: map,
      position: new google.maps.LatLng(marcador.latitude, marcador.longitude),
      icon: icono,
      title: marcador.name,
    });
  }
}
