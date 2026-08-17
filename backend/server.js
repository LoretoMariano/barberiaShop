require('dotenv').config(); // 1. abrir la caja fuerte, ANTES que todo lo demás

const express = require("express");
const app = express();
const cors = require('cors');
const sequelize = require('./src/config/database'); // 2. traer la conexión

const serviciosRoutes = require("./src/routes/serviciosRoutes");
const peluquerosRoutes = require("./src/routes/peluquerosRoutes");
const turnosRoutes = require("./src/routes/turnosRoutes");

app.use(express.json());
app.use(cors()); // 3. habilitar CORS para todas las rutas  

app.use("/api/servicios", serviciosRoutes);
app.use("/api/peluqueros", peluquerosRoutes);
app.use("/api/turnos", turnosRoutes);

const PORT = process.env.PORT || 3000; // 3. leer el puerto del .env

// 4. sincronizar la base de datos ANTES de prender el servidor
sequelize.sync()
  .then(() => {
    console.log('✅ Base de datos conectada y sincronizada');
    app.listen(PORT, () => {
      console.log(`🚀 Servidor corriendo en http://localhost:${PORT}`);
    });
  })
  .catch((err) => console.log('❌ Error de conexión:', err));