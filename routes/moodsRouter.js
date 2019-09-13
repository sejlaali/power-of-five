const express = require('express');
const { Mood, User } = require('../models');
const moodsRouter = express.Router();
const jwt = require('jsonwebtoken');
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
    res.status(403).send('error on GET MOODS (line 16)');
  }
})

moodsRouter.post('/', async (req, res) => {
  try {
    let { mood, token } = req.body;
    const userData = await jwt.decode(token, 'SECRET');
    const id = userData.id;
    const user = await User.findByPk(id)
    const moodObj = await Mood.create({
      number: mood.number,
      text: mood.text
    });

    await moodObj.setUser(user)
    res.json(moodObj)

  } catch(e) {
    console.error(e);
    res.json({message:e.message});
  }
});


module.exports = moodsRouter;
