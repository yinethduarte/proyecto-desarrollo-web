function crearPublicacion() {
  let titulo = document.getElementById("titulo").value;
  console.log(titulo);
  document.getElementById("titulo").value = "";
  let contenido = document.getElementById("contenido").value;
  console.log(contenido);
  document.getElementById("contenido").value = "";
  let fecha = document.getElementById("fecha").value;
  console.log(fecha);
  document.getElementById("fecha").value = "";
  let usuario = document.getElementById("usuario").value;
  console.log(usuario);
  document.getElementById("usuario").value = "";
  let postObj = {};
  postObj.titulo = titulo;
  postObj.contenido = contenido;
  postObj.fecha = fecha;
  postObj.usuario_id = usuario;
  console.log(postObj);
  let post = JSON.stringify(postObj);
  const url = "http://localhost:3000/publicacion";
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

function agregarUsuariosDB(usuarios) {
  const selectElement = document.getElementById("usuario");
  usuarios.forEach((usuario) => {
    const optionElement = document.createElement("option");
    optionElement.value = usuario.id;
    optionElement.textContent = usuario.nombre;
    selectElement.appendChild(optionElement);
  });
}

function consultarUsuarios() {
  const url = "http://localhost:3000/usuario";
  let xhr = new XMLHttpRequest();
  xhr.open("GET", url, true);
  xhr.setRequestHeader("Content-type", "application/json; charset=UTF-8");

  xhr.onload = function () {
    if (xhr.status === 200) {
      // Verificar el estado 200 para una respuesta exitosa en una petición GET
      console.log("Datos recibidos con éxito!");
      console.log(xhr.response);
      // Si la respuesta es JSON, puedes parsearla así:
      let responseObj = JSON.parse(xhr.responseText);
      console.log(responseObj);
      agregarUsuariosDB(responseObj);
    } else {
      console.error(`Error ${xhr.status}: ${xhr.statusText}`);
    }
  };

  xhr.send(); // Enviar la petición GET
}
consultarUsuarios();
