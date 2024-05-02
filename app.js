const express=require('express');
const router = require('./Routes/router');
const app = express();
const cors = require("cors");
const bp = require("body-parser");
app.use(express.json());
app.use(bp.json());
app.use(bp.urlencoded({ extended: true }));

app.use(cors());
app.use("/",router);

module.exports = app;
