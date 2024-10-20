import express from "express"
const router = express.Router();

import { Player,Team } from "../db.js";

router.post('/players', async (req, res) => {
    try {
        const data=await req.body;
        console.log(data);
      const player = new Player({
        name: req.body.name,
        position: req.body.position,
        team: req.body.team,
        points: req.body.points
      });
      const newPlayer = await player.save();
      res.status(201).json(newPlayer);
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  });

router.get('/players', async (req, res) => {
    try {
      const players = await Player.find();
      res.json(players);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  });
  
  // POST /teams - Create a new team
  router.post('/teams', async (req, res) => {
    try {
      const team = new Team({
        name: req.body.name,
        players: req.body.players
      });
      const newTeam = await team.save();
      res.status(201).json(newTeam);
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  });
  
  // GET /teams/:id - Retrieve a specific team by ID
  router.get('/teams/:id', async (req, res) => {
    try {
      const team = await Team.findById(req.params.id).populate('players');
      if (team == null) {
        return res.status(404).json({ message: 'Team not found' });
      }
      res.json(team);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  });
 export default router;