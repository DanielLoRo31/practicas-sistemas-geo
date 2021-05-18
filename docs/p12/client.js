function iniciaMapa() {
  var coordenadas = { lat: 21.152639, lng: -101.711598 };

  var propiedades = {
    center: coordenadas,
    zoom: 6,
    mapTypeId: "terrain",
  };

  map = new google.maps.Map(document.getElementById("map"), propiedades);

  fetch(
    "municipios.json"
  ).then(renderShadow);
}

const renderShadow = async (response) => {
  const municipios = await response.json();

  var datos = document.getElementById("datos");

  var tabla = '';

  var coordenadasVuelos = [];

  municipios.forEach((municipio) => {
    coordenadasVuelos.push(municipio.coordenadas);

    new google.maps.Circle({
      strokeColor: "green",
      strokeOpacity: 0.8,
      strokeWeight: 2,
      fillColor: "green",
      fillOpacity: 0.35,
      map: map,
      center: municipio.coordenadas,
      radius: Math.sqrt(municipio.habitantes) * 10,
    });

    tabla += `
                <tr>
                  <th scope="row">${municipio.nombre}</th>
                  <td>${municipio.estado}</td>
                  <td>${municipio.habitantes}</td>
                </tr>
              `;
  });

  var vuelosTrazo = new google.maps.Polyline({
    path: coordenadasVuelos,
    geodesic: true,
    strokeColor: "blue",
    strokeOpacity: 0.5,
    strokeColor: 1,
    fillColor: "green",
  });

  vuelosTrazo.setMap(map);

  datos.innerHTML = tabla;
};
