const Turno = require('../models/turno');

const turnosController = {
  getAll: async (req, res) => {
    try {
      const turnos = await Turno.findAll();
      res.json(turnos);
    } catch (error) {
      res.status(500).json({ error: "Error al consultar la base de datos" });
    }
  },

  getById: async (req, res) => {
    try {
      const turno = await Turno.findByPk(req.params.id);
      if (!turno) {
        return res.status(404).json({ mensaje: "Turno no encontrado" });
      }
      res.json(turno);
    } catch (error) {
      res.status(500).json({ error: "Error al consultar la base de datos" });
    }
  },

  create: async (req, res) => {
    try {
      const nuevoTurno = await Turno.create(req.body);
      res.status(201).json({ mensaje: "Turno creado exitosamente", turno: nuevoTurno });
    } catch (error) {
      res.status(500).json({ error: "Error al crear el turno" });
    }
  },

  update: async (req, res) => {
    try {
      const [actualizado] = await Turno.update(req.body, { where: { id: req.params.id } });
      if (!actualizado) {
        return res.status(404).json({ mensaje: "Turno no encontrado" });
      }
      res.json({ mensaje: "Turno actualizado correctamente" });
    } catch (error) {
      res.status(500).json({ error: "Error al actualizar el turno" });
    }
  },

  delete: async (req, res) => {
    try {
      const borrados = await Turno.destroy({ where: { id: req.params.id } });
      if (borrados === 0) {
        return res.status(404).json({ mensaje: "Turno no encontrado" });
      }
      res.json({ mensaje: "Turno eliminado exitosamente" });
    } catch (error) {
      res.status(500).json({ error: "Error al eliminar el turno" });
    }
  }
};

module.exports = turnosController;