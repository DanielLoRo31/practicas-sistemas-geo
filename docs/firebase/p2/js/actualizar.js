formularioeditar.addEventListener("submit", (e) => {
  e.preventDefault();

  let id = formularioeditar.ideditar.value;
  let nombre = formularioeditar.nombreeditar.value;
  let especie = formularioeditar.especieeditar.value;
  let tipo = formularioeditar.tipoeditar.value;

  var registro = new Registro(id, nombre, especie, tipo);

  registro.actualizar();

  var idregistro = document.getElementById(id);
  idregistro.querySelector(".nombre").value = nombre + " ";
  idregistro.querySelector(".especie").value = especie + " ";
  idregistro.querySelector(".tipo").value = tipo + " ";

  formularioeditar.nombreeditar.value = "";
  formularioeditar.especieeditar.value = "";
  formularioeditar.tipoeditar.value = "";

  $("#ventanaeditar").modal("hide");
});
