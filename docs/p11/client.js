function iniciaMapa() {
  var coordenadas = { lat: 21.157810831541415, lng: -101.69532182345814 };

  const propiedades = {
    1: {
      center: coordenadas,
      zoom: 12,
    },
    2: {
      center: coordenadas,
      zoom: 12,
      disableDefaultUI: true,
    },
    3: {
      center: coordenadas,
      zoom: 12,
      zoomControl: false,
      scaleControl: false,
    },
    4: {
      center: coordenadas,
      zoom: 12,
      mapTypeControl: true,
      mapTypeControlOptions: {
        style: google.maps.MapTypeControlStyle.DROPDOWN_MENU,
        mapTypeIds: ["roadmap", "satellite", "terrain"],
      },
    },
    5: {
      center: coordenadas,
      zoom: 12,
      mapTypeControl: true,
      mapTypeControlOptions: {
        style: google.maps.MapTypeControlStyle.HORIZONTAL_BAR,
        position: google.maps.ControlPosition.TOP_CENTER,
      },
      zoomControl: true,
      zoomControlOptions: {
        position: google.maps.ControlPosition.LEFT_CENTER,
      },
      scaleControl: true,
      streetViewControl: true,
      streetViewControlOptions: {
        position: google.maps.ControlPosition.LEFT_TOP,
      },
      fullscreenControl: true,
    },
    6: {
      center: coordenadas,
      zoom: 12,
      restriction: {
        latLngBounds: {
          north: 21.390039,
          south: 20.858414,
          west: -102.149631,
          east: -101.09299,
        },
        strictBounds: false,
      },
    },
  };

  Object.keys(propiedades).forEach((p) => {
    new google.maps.Map(document.getElementById(`mapa${p}`), propiedades[+p]);
  });
}
