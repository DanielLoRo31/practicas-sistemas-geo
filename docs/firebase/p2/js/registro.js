class Registro {
  constructor(id, nombre, especie, tipo) {
    this.id = id;
    this.nombre = nombre;
    this.especie = especie;
    this.tipo = tipo;
  }

  borrar(id) {
    db.collection("animales").doc(id).delete();
  }

  agregar() {
    db.collection("animales").add({
      nombre: this.nombre,
      especie: this.especie,
      tipo: this.tipo,
    });
  }

  editar() {
    formularioeditar.nombreeditar.value = this.nombre;
    formularioeditar.especieeditar.value = this.especie;
    formularioeditar.tipoeditar.value = this.tipo;
    formularioeditar.ideditar.value = this.id;
  }

  actualizar() {
    db.collection("animales").doc(this.id).update({
      nombre: this.nombre,
      especie: this.especie,
      tipo: this.tipo,
    });
  }
}
