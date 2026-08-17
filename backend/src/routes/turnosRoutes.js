//lo que hace este archivo(todos los archivos routes) es crear las rutas para los turnos, y cada ruta llama a un metodo del controlador correspondiente.

const express = require("express");
const router = express.Router();
const controller = require("../controllers/turnosController");

router.get("/", controller.getAll);
router.get("/:id", controller.getById);
router.post("/", controller.create);
router.put("/:id", controller.update);
router.delete("/:id", controller.delete);

module.exports = router;
