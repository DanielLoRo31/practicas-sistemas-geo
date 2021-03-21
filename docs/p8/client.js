var coordenadas = {
  lat: -31.56391,
  lng: 147.154312,
};

const initValues = () => {
    const urlParams = new URLSearchParams(window.location.search);
    const idioma = urlParams.get("idioma");
    
    document.getElementById("idioma").value = idioma;
    
    var script = document.createElement("script");
    
    script.src =
      "https://maps.googleapis.com/maps/api/js?key=AIzaSyDnY8kMwai0w66KFgVDfGoFom4BfJ-hkM0&callback=iniciaMapa&language=" +
      idioma;
    document.head.appendChild(script);
}

initValues();


function iniciaMapa() {
  var map = new google.maps.Map(document.getElementById("mapa"), {
    center: coordenadas,
    zoom: 3,
  });
}
