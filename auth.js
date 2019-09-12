const bcrypt = require('bcrypt');
const SALT = 12;
const jwt = require('jsonwebtoken');

const hash = async (password) => {
  try {
    const password_digest = await bcrypt.hash(password, SALT);
    return password_digest;
  } catch(e) {
    console.error(e);
  }
};

const compare = async (password, password_digest) => {
  const isSame = await bcrypt.compare(password, password_digest);
  return isSame;
}

const encode = async (data) => {
  const encodedData = await jwt.sign(data, "SECRET");
  return encodedData;
}

const restrict = async (req, res, next) => {
  try {
    const token = req.headers.authorization.split(" ")[1];
    const verifyIt = await jwt.verify(token, "SECRET")
    res.locals.user = verifyIt
    next();
  } catch (e) {
    res.status(403).send('Restricted Access')
  }
};

module.exports = {
  hash,
  compare,
  encode,
  restrict
}
