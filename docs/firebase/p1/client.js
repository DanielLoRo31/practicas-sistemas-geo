var firebaseConfig = {
  apiKey: "AIzaSyB-8DTGEAnbBRmpfSgpctVUFj5dtqZbO4k",
  authDomain: "practicas-geo.firebaseapp.com",
  projectId: "practicas-geo",
  storageBucket: "practicas-geo.appspot.com",
  messagingSenderId: "29585756463",
  appId: "1:29585756463:web:9cda0b77738fdff11911da",
};

firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();

const formulario = document.querySelector("#forma");

const deleteItem = (id) => {
    db.collection("animales").doc(id).delete();
}

const renderList = (doc) => {
    var string = '<div class="col-12 d-flex align-items-center justify-content-center"><div class="card-image"><div class="card-data"><div class="titles-card"><h1>Nombre: <span>'
    var string2 = '</span></h1></div><div class="titles-card"><h1>Especie: <span>'
    var string3 = '</span></h1></div></div><div class="card-data"><div class="titles-card"><h1>Tipo: <span>'
    var string4 = '</span></h1></div><div class="titles-card d-flex align-items-center justify-content-center"><button class="btn btn-danger m-3" onclick="deleteItem(' + "'"
    var string5 = "'" + ')">Eliminar</button></div></div></div></div>'

    
    let allString = string + doc.data().nombre + string2 + doc.data().especie + string3 + doc.data().tipo + string4 + doc.id + string5;

    $('#lista').append(allString)
}

//Guarda datos
formulario.addEventListener("submit", (e) => {
  e.preventDefault();
  db.collection("animales").add({
    nombre: formulario.nombre.value,
    especie: formulario.especie.value,
    tipo: formulario.tipo.value,
  });

  formulario.nombre.value = "";
  formulario.especie.value = "";
  formulario.tipo.value = "";
});

db.collection("animales").onSnapshot((snapshot) => {
  let changes = snapshot.docChanges();
  changes.forEach((change) => {
    if (change.type == "added") {
        console.log(change.doc)
        renderList(change.doc)
    } else if (change.type == "removed") {
      console.log(change.doc.id);
      let valorid = document.getElementById(change.doc.id);
      lista.removeChild(valorid);
    }
  });
});

