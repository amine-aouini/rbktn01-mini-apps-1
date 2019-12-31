const express = require('express');
const app = express();

app.use(express.static('public'));

var port = 2020;

app.listen(port, () => {
    console.log(`listen to ${port}`);
});