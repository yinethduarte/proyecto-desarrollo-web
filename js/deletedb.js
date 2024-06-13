module.exports = {
  eliminarUsuarioBD: function (idEliminar) {
    return new Promise((resolve, reject) => {
      const sqlite3 = require("sqlite3").verbose();

      // Crear/conectar a la base de datos
      const db = new sqlite3.Database("basededatos.db");

      const deleteQuery = `DELETE FROM usuarios WHERE id = ?`;
      const deletedName = idEliminar;
      db.run(deleteQuery, [deletedName], function (err) {
        if (err) {
          console.error(err.message);
        } else {
          console.log(`Eliminadas ${this.changes} filas(s)`);
          resolve(this.changes);
        }
      });
    });
  },
  eliminarPublicacionBD: function (idEliminar) {
    return new Promise((resolve, reject) => {
      const sqlite3 = require("sqlite3").verbose();

      // Crear/conectar a la base de datos
      const db = new sqlite3.Database("basededatos.db");

      const deleteQuery = `DELETE FROM publicaciones WHERE id = ?`;
      const deletedName = idEliminar;
      db.run(deleteQuery, [deletedName], function (err) {
        if (err) {
          console.error(err.message);
        } else {
          console.log(`Eliminadas ${this.changes} filas(s)`);
          resolve(this.changes);
        }
      });
    });
  },
};
