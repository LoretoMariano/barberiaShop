const express = require("express");
const app = express(); //este es el servidor en forma de objeto en js
const PORT = 3000;

app.use(express.static("public")); //para que el servidor pueda mostrar archivos estaticos (html, css, js) desde la carpeta public
app.use(express.json()); //para que el servidor pueda recibir json desde el cliente

const serviciosDB = [
  {
    id: 1,
    servicio: "Corte de cabello",
    precio: 15,
    tiempo: "30 minutos",
  },
  {
    id: 2,
    servicio: "Coloración completa",
    precio: 30,
    tiempo: "1 hora",
  },
  {
    id: 3,
    servicio: "Peinado + brushing",   
    precio: 20,
    tiempo: "45 minutos",
  },
  {
    id: 4,
    servicio: "Tratamiento capilar",
    precio: 25,
    tiempo: "1 hora",
  }
];

const peluquerosDB = [
  {
    id: 1,
    nombre: "Juan",
    especialidad: "Corte de cabello",
  },
];

const turnosDB = [];

//Rutas para obtener los datos de los servicios y peluqueros
app.get("/api/servicios", (req, res) => {
  res.json(serviciosDB);
});

app.get("/api/peluqueros", (req, res) => {
  res.json(peluquerosDB);
});

app.get("/api/turnos", (req, res) => {
  res.json(turnosDB);
});

//Ruta para crear un nuevo turno
app.post("/api/turnos", (req, res) => {
  const nuevoTurno = req.body;

  nuevoTurno.id = turnosDB.length + 1; //asignar un id al nuevo turno

  turnosDB.push(nuevoTurno);

  res.status(201).json({ mensaje: "Turno creado exitosamente", turno: nuevoTurno });

  console.log("Nuevo turno creado:", nuevoTurno);

});


app.listen(PORT, () => {
  console.log(`✅ Servidor corriendo en http://localhost:${PORT}`);
});
