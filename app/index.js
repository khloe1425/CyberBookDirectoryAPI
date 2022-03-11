const express = require('express');
const cors = require("cors");
const app = express();
const port = 8080;
const router = require('./routers/index.js');
app.use(cors());
app.use(express.json());
app.use('/api',router);
app.listen(port, () => {
    console.log(`Server started on http://localhost:${port}/`);
});