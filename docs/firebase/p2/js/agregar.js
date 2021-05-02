formulario.addEventListener("submit", (e) => {
  e.preventDefault();
  var registro = new Registro(
    null,
    formulario.nombre.value,
    formulario.especie.value,
    formulario.tipo.value
  );
  registro.agregar();
  formulario.nombre.value = "";
  formulario.especie.value = "";
  formulario.tipo.value = "";
  $("#ventananuevo").modal("hide");
});
