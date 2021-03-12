var paises = document.getElementById("paises");

fetch("https://corona.lmao.ninja/v3/covid-19/countries").then(function (
  response
) {
  response.json().then(function (datos) {
    datos.forEach((registro) => {
      let columna = document.createElement("div");
      columna.className = "col-6 border row-country";
      paises.appendChild(columna);

      let nombre = document.createElement("h3");
      nombre.textContent =
        "País: " + registro.country + " - Casos: " + registro.cases;
      columna.appendChild(nombre);
    });
  });
});
