const express = require('express');
const app = express();
// const path = require('path');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(__dirname + '/../public'));
// app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
    res.send(res.data);
});


let port = process.env.PORT || 3017;
app.listen(port, function () {
    console.log(`Listening on port ${port}`);    
});

module.exports = app;