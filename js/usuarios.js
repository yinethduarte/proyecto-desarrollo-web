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
      document.getElementById("cuerpoUsuarios").innerHTML = "";
      agregarUsuariosDB(responseObj);
    } else {
      console.error(`Error ${xhr.status}: ${xhr.statusText}`);
    }
  };

  xhr.send(); // Enviar la petición GET
}

function eliminarUsuario(id) {
  const url = `http://localhost:3000/usuario/${id}`;
  let xhr = new XMLHttpRequest();
  xhr.open("DELETE", url, true);
  xhr.setRequestHeader("Content-type", "application/json; charset=UTF-8");

  xhr.onload = function () {
    if (xhr.status === 200) {
      console.log(`Usuario con id ${id} eliminado con éxito!`);
      consultarUsuarios(); // Actualizar la lista de usuarios después de eliminar
    } else {
      console.error(`Error ${xhr.status}: ${xhr.statusText}`);
    }
  };

  xhr.send(); // Enviar la petición DELETE
}

function agregarUsuariosDB(usuarios) {
  usuarios.forEach((usuario) => {
    // Crear el elemento <tr>
    const tr = document.createElement("tr");

    // Crear y configurar los elementos <td>
    const tdId = document.createElement("td");
    tdId.textContent = usuario.id;

    const tdNombre = document.createElement("td");
    tdNombre.textContent = usuario.nombre;

    const tdCorreo = document.createElement("td");
    tdCorreo.textContent = usuario.correo;

    const tdTelefono = document.createElement("td");
    tdTelefono.textContent = usuario.telefono;

    const tdFecha = document.createElement("td");
    tdFecha.textContent = usuario.fecha;

    const tdEliminar = document.createElement("td");

    // Crear el contenedor para el icono
    const divFlexCentrado = document.createElement("div");
    divFlexCentrado.className = "flex-centrado";

    // Crear el icono
    const iconTrash = document.createElement("i");
    iconTrash.className = "fas fa-trash icon";
    // Añadir el event listener al icono
    iconTrash.addEventListener("click", function () {
      eliminarUsuario(usuario.id);
    });

    // Añadir el icono al contenedor
    divFlexCentrado.appendChild(iconTrash);

    // Añadir el contenedor al <td>
    tdEliminar.appendChild(divFlexCentrado);

    // Añadir todos los elementos <td> al <tr>
    tr.appendChild(tdId);
    tr.appendChild(tdNombre);
    tr.appendChild(tdCorreo);
    tr.appendChild(tdTelefono);
    tr.appendChild(tdFecha);
    tr.appendChild(tdEliminar);

    // Añadir el <tr> al elemento con id "cuerpoUsuarios"
    document.getElementById("cuerpoUsuarios").appendChild(tr);
    // Definir la función que se llamará al hacer clic en el icono
    /*function eliminarUsuario(fila) {
      console.log("Fila eliminada" + fila);
    }*/
  });
}

consultarUsuarios();
