const Player = require('../models/player');

exports.getAllPlayers = async (req, res) => {
  try {
    const players = await Player.findAll();
    res.json(players);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.getPlayerById = async (req, res) => {
  try {
    const player = await Player.findByPk(req.params.id);
    if (player) {
      res.json(player);
    } else {
      res.status(404).json({ message: 'Player not found' });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.createPlayer = async (req, res) => {
  try {
    const { name, position, rating } = req.body;
    const player = await Player.create({ name, position, rating });
    res.status(201).json(player);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.updatePlayer = async (req, res) => {
  try {
    const player = await Player.findByPk(req.params.id);
    if (player) {
      const { name, position, rating } = req.body;
      await player.update({ name, position, rating });
      res.json(player);
    } else {
      res.status(404).json({ message: 'Player not found' });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.deletePlayer = async (req, res) => {
  try {
    const player = await Player.findByPk(req.params.id);
    if (player) {
      await player.destroy();
      res.json({ message: 'Player deleted' });
    } else {
      res.status(404).json({ message: 'Player not found' });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
