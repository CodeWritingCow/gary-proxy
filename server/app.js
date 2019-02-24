const compression = require('compression');
const express = require('express');
const app = express();
const cors = require('cors');
const path = require('path');

// compress response
app.use(compression());

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname + '/../public')));
app.use(cors());

app.get('/:id', (req, res) => {
    res.sendFile(path.join(__dirname + '/../public/index.html'));
});

let port = process.env.PORT || 3017;
app.listen(port, function () {
    console.log(`Listening on port ${port}`);    
});

module.exports = app;