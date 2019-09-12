const express = require("express");
const bodyParser = require("body-parser");
const logger = require("morgan");
const app = express();
const PORT = process.env.PORT || 3001;
const cors = require('cors')

app.use(logger("dev"));
app.use(bodyParser.json());

app.use((err, req, res, next) => {
  console.warn(err.stack);
  res.status(500).json({ msg: err.message });
});
app.use(cors())


app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`);
  });