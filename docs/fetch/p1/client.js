var paises = document.getElementById("paises");

fetch("datos.json").then((response) => {
  response.json().then((datos) => {
    datos.forEach((registro) => {
      let h2 = document.createElement("h2");
      let span = document.createElement("span");
      span.textContent = "País: "
      h2.appendChild("hola");
      h2.appendChild(registro.country + ", casos:" + registro.cases)
      paises.appendChild(h2);
    });
  });
});
