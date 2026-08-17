// traigo el modelo de Peluquero para poder interactuar con la base de datos
const Peluquero = require('../models/Peluquero');

const peluquerosController = {
  getAll: async (req, res) => {
    try {
      const peluqueros = await Peluquero.findAll();
      res.json(peluqueros);
    } catch (error) {
      res.status(500).json({ error: "Error al consultar la base de datos" });
    }
  },

  getById: async (req, res) => {
    try {
      const peluquero = await Peluquero.findByPk(req.params.id);
      if (peluquero) {
        res.json(peluquero);
      } else {
        res.status(404).json({ error: "Peluquero no encontrado" });
      }
    } catch (error) {
      res.status(500).json({ error: "Error en el servidor" });
    }
  },

  create: async (req, res) => {
    try {
      const nuevoPeluquero = await Peluquero.create(req.body);
      res.status(201).json({ mensaje: "Peluquero creado con éxito", peluquero: nuevoPeluquero });
    } catch (error) {
      res.status(400).json({ error: "Datos inválidos o incompletos" });
    }
  },

  update: async (req, res) => {
    try {
      const [actualizado] = await Peluquero.update(req.body, { where: { id: req.params.id } });
      if (actualizado) {
        res.json({ mensaje: "Peluquero actualizado correctamente" });
      } else {
        res.status(404).json({ error: "No se encontró el peluquero a actualizar" });
      }
    } catch (error) {
      res.status(500).json({ error: "Error al actualizar" });
    }
  },

  delete: async (req, res) => {
    try {
      const borrados = await Peluquero.destroy({ where: { id: req.params.id } });
      if (borrados > 0) {
        res.json({ mensaje: "Peluquero eliminado correctamente" });
      } else {
        res.status(404).json({ error: "El peluquero no existe" });
      }
    } catch (error) {
      res.status(500).json({ error: "Error al intentar eliminar" });
    }
  }
};

module.exports = peluquerosController;