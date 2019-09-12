const express = require('express');
const { Mood, User } = require('../models');
const moodsRouter = express.Router();
const { hash,
        compare,
        encode,
        restrict
 } = require('../auth');

moodsRouter.get('/', async (req, res) => {
  try {
    const moods = await Mood.findAll();
    res.json(moods);
  } catch(e) {
    console.error(e);
    res.status(403).send('no access');
  }
})

moodsRouter.post('/', async (req, res) => {
  try {
    let { type, id } = req.body;
    const user = await User.findByPk(id)
    const mood = await Mood.create({
      type
    });

    await mood.setUser(user)
    res.json(mood)

  } catch(e) {
    console.error(e);
    res.json({message:e.message});
  }
});


module.exports = moodsRouter;
