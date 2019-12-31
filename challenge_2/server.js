var express = require('express');
var app = express();
var port = 3000;

app.use(express.static('client'));
app.use(express.urlencoded());

app.post('/data', (req, res) => {
    console.log(req.body);
});

app.listen(port, () => console.log(`app listening on port ${port}!`))