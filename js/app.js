const express = require("express");
const app = express();
const port = 3000;
var insertdb = require("./insertdb");
var readdb = require("./readdb");
var deletedb = require("./deletedb");

app.use(express.json());

// Add headers before the routes are defined
app.use(function (req, res, next) {
  // Website you wish to allow to connect
  res.setHeader("Access-Control-Allow-Origin", "*");

  // Request methods you wish to allow
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, OPTIONS, PUT, PATCH, DELETE"
  );

  // Request headers you wish to allow
  res.setHeader(
    "Access-Control-Allow-Headers",
    "X-Requested-With,content-type"
  );

  // Set to true if you need the website to include cookies in the requests sent
  // to the API (e.g. in case you use sessions)
  res.setHeader("Access-Control-Allow-Credentials", true);

  // Pass to next layer of middleware
  next();
});

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.get("/usuario", (req, res) => {
  readdb
    .leerUsuariosBD()
    .then((usuarios) => {
      res.status(200).json(usuarios);
    })
    .catch((error) => {
      res
        .status(500)
        .json({ error: "Error al leer usuarios de la base de datos" });
    });
});

app.delete("/usuario/:id", (req, res) => {
  const userId = req.params.id;
  deletedb
    .eliminarUsuarioBD(userId)
    .then(() => {
      res
        .status(200)
        .json({ message: `Usuario con id ${userId} eliminado con éxito!` });
    })
    .catch((error) => {
      res
        .status(500)
        .json({ error: "Error al eliminar usuario de la base de datos" });
    });
});

app.post("/usuario", (req, res) => {
  // Prepare output in JSON format
  console.log(req.body);
  const usuario = req.body;
  insertdb.insertarUsuarioEnBD(usuario);
  res.status(201).json("El usuario ha sido agregado a la base de datos");
});

//publicaciones
app.get("/publicacion", (req, res) => {
  readdb
    .leerPublicacionesBD()
    .then((publicaciones) => {
      res.status(200).json(publicaciones);
    })
    .catch((error) => {
      res
        .status(500)
        .json({ error: "Error al leer publicaciones de la base de datos" });
    });
});

app.delete("/publicacion/:id", (req, res) => {
  const publicacionId = req.params.id;
  deletedb
    .eliminarPublicacionBD(publicacionId)
    .then(() => {
      res.status(200).json({
        message: `Publicacion con id ${publicacionId} eliminada con éxito!`,
      });
    })
    .catch((error) => {
      res
        .status(500)
        .json({ error: "Error al eliminar publicación de la base de datos" });
    });
});

app.post("/publicacion", (req, res) => {
  // Prepare output in JSON format
  console.log(req.body);
  const publicacion = req.body;
  insertdb.insertarPublicacionEnBD(publicacion);
  res.status(201).json("La publicacion ha sido agregada a la base de datos");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
