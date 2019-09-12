const express = require('express');
const { User } = require('../models');
const usersRouter = express.Router();
const { hash,
        compare,
        encode,
        restrict
 } = require('../auth');

usersRouter.get('/', restrict, async (req, res) => {
  try {
    const users = await User.findAll();
    res.json(users);
  } catch(e) {
    console.error(e);
    res.status(403).send('no access');
  }
})

usersRouter.post('/', async (req, res) => {
  try {
    let { email, password_digest } = req.body;
    password_digest = await hash(password_digest);
    const user = await User.create({
      email,
      password_digest,
      name
    });
    const userData = {
      id: user.dataValues.id,
      email: user.dataValues.email,
      name: user.dataValues.name,
    }
    const token = await encode(userData);
    res.send(token);
  } catch(e) {
    console.error(e);
    res.json({message:e.message});
  }
});

usersRouter.post('/login', async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({where:{email}});
    const isSame = await compare(password, user.password_digest);
    if (isSame === true) {
      const userData = {
        id: user.dataValues.id,
        email: user.dataValues.email,
        name: user.dataValues.name
      }
      const token = await encode(userData);
      res.send(token);
    } else {
      res.status(403).send('bad creds else (line 56)');
    }
  } catch(e) {
    res.status(403).send('bad creds catch (line 58)');
  }
});

module.exports = usersRouter;
