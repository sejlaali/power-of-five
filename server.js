const express = require('express');
const bodyParser = require('body-parser');
const logger = require('morgan');
const cors = require('cors');

const usersRouter = require('./routes/usersRouter');

const app = express();

app.use(cors());
app.use(logger('dev'));
app.use(bodyParser.json());

app.use('/users', usersRouter);
app.use('/moods', moodsRouter);

app.listen(3000, () => console.log('up and running'));
