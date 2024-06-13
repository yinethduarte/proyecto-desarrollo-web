module.exports = {
  leerUsuariosBD: function () {
    return new Promise((resolve, reject) => {
      const sqlite3 = require("sqlite3").verbose();

      // Crear/conectar a la base de datos
      const db = new sqlite3.Database("basededatos.db");

      var lista = [];
      db.all("SELECT * FROM usuarios", function (err, rows) {
        if (err) return err;
        let contador = 0;
        rows.forEach(function (row) {
          lista[contador] = row;
          contador++;
        });
        db.close();
        console.log(lista);

        resolve(lista);
      });
    });
  },
};
