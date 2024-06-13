module.exports = {
  insertarUsuarioEnBD: function (usuario) {
    const sqlite3 = require("sqlite3").verbose();
    // Insertar el nuevo usuario
    const insertQuery = `INSERT INTO usuarios (nombre, contrasena, correo, telefono, fecha) VALUES (?, ?, ?, ?, ?)`;
    // Crear/conectar a la base de datos
    const db = new sqlite3.Database("basededatos.db");

    // Crear la tabla de usuarios
    db.run(`CREATE TABLE IF NOT EXISTS usuarios (
      id INTEGER PRIMARY KEY,
      nombre TEXT,
      contrasena TEXT,
      correo TEXT,
      telefono INTEGER,
      fecha TEXT
  )`);
    db.run(
      insertQuery,
      [
        usuario.nombre,
        usuario.contrasena,
        usuario.correo,
        usuario.telefono,
        usuario.fechaN,
      ],
      function (err) {
        if (err) {
          console.error(err.message);
        } else {
          console.log(`Usuario agregado con id ${this.lastID}`);
        }
      }
    );

    // Cerrar conexión con la base de datos
    db.close();
  },
  insertarPublicacionEnBD: function (publicacion) {
    const sqlite3 = require("sqlite3").verbose();
    // Insertar la nueva publicacion
    const insertQuery = `INSERT INTO publicaciones (titulo, contenido, fecha, usuario_id) VALUES (?, ?, ?, ?)`;
    // Crear/conectar a la base de datos
    const db = new sqlite3.Database("basededatos.db");

    // Crear la tabla de publicaciones
    db.run(`CREATE TABLE IF NOT EXISTS publicaciones (
      id INTEGER PRIMARY KEY,
      titulo TEXT,
      contenido TEXT,
      fecha TEXT,
      usuario_id INTEGER
  )`);
    db.run(
      insertQuery,
      [
        publicacion.titulo,
        publicacion.contenido,
        publicacion.fecha,
        publicacion.usuario_id,
      ],
      function (err) {
        if (err) {
          console.error(err.message);
        } else {
          console.log(`Publicacion agregada con id ${this.lastID}`);
        }
      }
    );

    // Cerrar conexión con la base de datos
    db.close();
  },
};
