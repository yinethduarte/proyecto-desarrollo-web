function myFunction() {
  let nombre = document.getElementById("nombre").value;
  console.log(nombre);
  document.getElementById("nombre").value = "";
  let contrasena = document.getElementById("contrasena").value;
  console.log(contrasena);
  document.getElementById("contrasena").value = "";
  let correo = document.getElementById("correo").value;
  console.log(correo);
  document.getElementById("correo").value = "";
  let telefono = document.getElementById("telefono").value;
  console.log(telefono);
  document.getElementById("telefono").value = "";
  let fechaN = document.getElementById("fechaN").value;
  console.log(fechaN);
  document.getElementById("fechaN").value = "";
  let postObj = {};
  postObj.nombre = nombre;
  postObj.contrasena = contrasena;
  postObj.correo = correo;
  postObj.telefono = telefono;
  postObj.fechaN = fechaN;
  console.log(postObj);
  let post = JSON.stringify(postObj);
  const url = "http://localhost:3000/usuario";
  let xhr = new XMLHttpRequest();
  xhr.open("POST", url, true);
  xhr.setRequestHeader("Content-type", "application/json; charset=UTF-8");
  xhr.send(post);
  xhr.onload = function () {
    if (xhr.status === 201) {
      console.log("Post creado con éxito!");
      console.log(xhr.responseText);
    }
  };
}
