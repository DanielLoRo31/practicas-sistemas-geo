var paises = document.getElementById("paises");

fetch("datos.json").then((response) => {
  response.json().then((datos) => {
    datos.forEach((registro) => {
      let nombre = document.createElement("h2");
      nombre.textContent =
        "País: " + registro.country + ", casos:" + registro.cases;
      paises.appendChild(nombre);
    });
  });
});
