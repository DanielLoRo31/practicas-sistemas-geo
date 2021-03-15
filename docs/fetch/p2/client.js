var paises = document.getElementById("paises");

const getData = async () => {
  try {
    const response = await fetch(
      "https://corona.lmao.ninja/v3/covid-19/countries"
    );
    const data = await response.json();

    data.forEach((registro) => {
      let columna = document.createElement("div");
      columna.className = "col-6 border row-country";
      paises.appendChild(columna);

      let nombre = document.createElement("h3");
      nombre.textContent =
        "País: " + registro.country + " - Casos: " + registro.cases;
      columna.appendChild(nombre);
    });
  } catch (error) {
    console.log(error)
  }
};

getData();
