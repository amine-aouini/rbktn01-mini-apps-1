const express = require('express');
const app = express();

app.use(express.static('public'));





const port = 2020;

app.listen(port, () => { console.log('listening to ' + port) });