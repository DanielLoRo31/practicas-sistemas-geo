const datos = [
  {
    posicion: {
      lat: 21.152639,
      lng: -101.711598,
    },
    titulo: "Universidad DeLaSalle Bajío AC.",
    direccion:
      "Avenida Universidad 602, Lomas del Campestre, 37150 León, Gto, México.",
    telefono: "477 710 8500.",
  },
  {
    posicion: {
      lat: 21.16067,
      lng: -101.68765,
    },
    titulo: "Casa",
    direccion: "Privada El Tucan #111",
    telefono: "477 136 8002.",
  },
  {
    posicion: {
      lat: 21.16671,
      lng: -101.70207,
    },
    titulo: "Club de Golf Campestre",
    direccion: "Ex, Hda. Cerro Gordo S/N, Club Campestre, León, Gto., México",
    telefono: "+52 477 214 2118.",
  },
  {
    posicion: {
      lat: 21.1823,
      lng: -101.71252,
    },
    titulo: "Casa Fabricio",
    direccion: "Jardin Barlovento #111 Gran Jardin",
    telefono: "477 107 0024.",
  },
  {
    posicion: {
      lat: 21.15718,
      lng: -101.66835,
    },
    titulo: "Terreno Reu",
    direccion: "Troncos 110, Los Cedros, 37149 León, Gto. ",
    telefono: "479 138 5506.",
  },
];

const retornarString = (nombre, direccion, telefono) => {
  let informacion = `<div class='div-title'><h1>${nombre}</h1>`;
  informacion += `<p><strong>Dirección:</strong> ${direccion}</p>`;
  informacion += `<p><strong>Teléfono:</strong>${telefono}</p></div>`;

  return informacion;
};

const crearMapa = () => {
  const propiedadesIniciales = {
    center: {
      lat: 21.152639,
      lng: -101.711598,
    },
    zoom: 14,
  };
  const mapa = document.getElementById("map");
  const map = new google.maps.Map(mapa, propiedadesIniciales);
  return map;
};

function iniciaMapa() {
  const map = crearMapa();

  datos.forEach((d, index) => {
    let propiedadesMarcador = {
      position: d.posicion,
      map,
      title: `Marcardor ${index}`,
    };

    let marcador = new google.maps.Marker(propiedadesMarcador);

    map.setCenter(d.posicion);

    let infowindow = new google.maps.InfoWindow({
      content: retornarString(d.titulo, d.direccion, d.telefono),
    });

    marcador.addListener("click", () => {
      infowindow.open(map, marcador);
    });
  });
}

var addDato = () => {
  var data = {
    posicion: {
      lat: +document.getElementById("lat").value,
      lng: +document.getElementById("lng").value,
    },
    titulo: document.getElementById("titulo").value,
    direccion:
    document.getElementById("direccion").value,
    telefono: document.getElementById("telefono").value,
  };
  datos.push(data);

  iniciaMapa()
};
