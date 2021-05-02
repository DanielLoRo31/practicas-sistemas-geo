function muestraRegistros(doc) {
  var registro = new Registro(doc.id, doc.data().nombre, doc.data().especie, doc.data().tipo);

  let li = document.createElement("li");
  li.setAttribute("id", registro.id);
  li.className = "li-container"

  let nombre = document.createElement("input");
  nombre.type = "text";
  nombre.value = registro.nombre;
  nombre.className = "nombre form-control";

  let especie = document.createElement("input");
  especie.type = "text";
  especie.value = registro.especie;
  especie.className = "especie form-control";

  let tipo = document.createElement("input");
  tipo.type = "text";
  tipo.value = registro.tipo;
  tipo.className = "tipo form-control";

  let divInputs = document.createElement("div");
  divInputs.className="div-inputs"

  divInputs.appendChild(nombre)
  divInputs.appendChild(especie)
  divInputs.appendChild(tipo)

  let borrar = document.createElement("button");
  borrar.className = "btn btn-danger m-3";
  borrar.textContent = "Borrar  ";

  let editar = document.createElement("button");
  editar.className = "btn btn-success m-3";
  editar.textContent = "Editar  ";
  editar.setAttribute("data-toggle", "modal");
  editar.setAttribute("data-target", "#ventanaeditar");

  let divButtons = document.createElement("div");
  divButtons.className="div-buttons"

  divButtons.appendChild(borrar)
  divButtons.appendChild(editar)

  // li.appendChild(borrar);
  // li.appendChild(editar);
  li.appendChild(divInputs);
  li.appendChild(divButtons);
  // li.appendChild(nombre);
  // li.appendChild(especie);
  // li.appendChild(tipo);
  productoslista.appendChild(li);

  borrar.addEventListener("click", (e) => {
    let id = e.target.parentElement.parentElement.getAttribute("id");
    registro.borrar(id);
  });

  editar.addEventListener("click", (e) => {
    // let id = e.target.parentElement.getAttribute("id");
    registro.editar();
  });
}
