const express = require("express");
const app = express(); //este es el servidor en forma de objeto en js
const PORT = 3000;

app.use(express.static("public"));

app.listen(PORT, () => {
  console.log(`✅ Servidor corriendo en http://localhost:${PORT}`);
});
