const express = require('express');
const bodyParser = require('body-parser');
const api = require('./src/api');

const app = express();
app.use(bodyParser.json());
const PORT = 8000;

app.use('/api/', api)

app.listen(PORT, () => console.log(`localhost:${PORT}`));