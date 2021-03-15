var coordenadas = {
  lat: 0,
  lng: 0,
};

var propiedades = {
  center: coordenadas,
  zoom: 2,
};

const getData = async (marcador, map) => {
  let icono = {
    url:
      "https://bestmedia.mx/wp-content/uploads/2020/03/InexperiencedGlossyAsiaticgreaterfreshwaterclam-small.gif",
    scaledSize: new google.maps.Size(40, 40),
    origin: new google.maps.Point(0, 0),
    anchor: new google.maps.Point(20, 35),
  };

  try {
    const results = await fetch(
      "https://corona.lmao.ninja/v3/covid-19/countries"
    );
    const data = await results.json();

    data.forEach((registro) => {
      if (registro.country == marcador.CountryName) {
        var informacion =
          "<strong>País:</strong> " +
          registro.country +
          "<br><strong>Casos:</strong> " +
          registro.cases +
          "<br><strong>Nuevos hoy:</strong> " +
          registro.todayCases +
          "<br><strong>Muertes:</strong> " +
          registro.deaths +
          "<br><strong>Muertes Hoy:</strong> " +
          registro.todayDeaths +
          "<br><strong>Recuperados:</strong> " +
          registro.recovered +
          "<br><strong>Activos:</strong> " +
          registro.active +
          "<br><strong>Críticos:</strong> " +
          registro.critical +
          "<br><strong>Casos por millón:</strong> " +
          registro.casesPerOneMillion;

        var infowindow = new google.maps.InfoWindow({
          content: informacion,
        });

        let marker = new google.maps.Marker({
          map: map,
          position: new google.maps.LatLng(
            marcador.CapitalLatitude,
            marcador.CapitalLongitude
          ),
          icon: icono,
          title: marcador.CountryName + registro.cases,
        });

        marker.addListener("click", function () {
          infowindow.open(map, marker);
        });
      }
    });
  } catch (error) {
    console.log("Hubo un problema con la petición Fetch:" + error.message);
  }
};

async function iniciaMapa() {
  try {
    const results = await fetch(
      "paises.json"
    );
    const data = await results.json();

    const map = new google.maps.Map(
      document.getElementById("map"),
      propiedades
    );

    data.forEach((marcador) => {
      getData(marcador, map);
    });
  } catch (error) {
    console.log("Hubo un problema con la petición Fetch:" + error.message);
  }
}
