const Servicio = require('../models/servicio');

// Controlador para manejar las rutas relacionadas con los servicios
const serviciosController = {
  getAll: async (req, res) => {
    try {
      const servicios = await Servicio.findAll();
      res.json(servicios);
    } catch (error) {
      res.status(500).json({ error: "Error al consultar la base de datos" });
    }
  },

  getById: async (req, res) => {
    try {
      const servicio = await Servicio.findByPk(req.params.id);
      if (servicio) {
        res.json(servicio);
      } else {
        res.status(404).json({ error: "Servicio no encontrado" });
      }
    } catch (error) {
      res.status(500).json({ error: "Error en el servidor" });
    }
  },

  create: async (req, res) => {
    try {
      const nuevoServicio = await Servicio.create(req.body);
      res.status(201).json({ mensaje: "Servicio creado con éxito", servicio: nuevoServicio });
    } catch (error) {
      res.status(400).json({ error: "Datos inválidos o incompletos" });
    }
  },

  update: async (req, res) => {
    try {
      const [actualizado] = await Servicio.update(req.body, { where: { id: req.params.id } });
      if (actualizado) {
        res.json({ mensaje: "Servicio actualizado correctamente" });
      } else {
        res.status(404).json({ error: "No se encontró el servicio a actualizar" });
      }
    } catch (error) {
      res.status(500).json({ error: "Error al actualizar" });
    }
  },

  delete: async (req, res) => {
    try {
      const borrados = await Servicio.destroy({ where: { id: req.params.id } });
      if (borrados > 0) {
        res.json({ mensaje: "Servicio eliminado correctamente" });
      } else {
        res.status(404).json({ error: "El servicio no existe" });
      }
    } catch (error) {
      res.status(500).json({ error: "Error al intentar eliminar" });
    }
  }
};

module.exports = serviciosController;