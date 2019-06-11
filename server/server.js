const express = require('express');
const app = express();
const path = require('path');
const publicPath = path.join(__dirname, '..', 'build');

app.use(express.static(publicPath));