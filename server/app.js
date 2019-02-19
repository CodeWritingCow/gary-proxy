const express = require('express');
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(__dirname + '/../public'));
// app.use(express.static(__dirname + '/../client/dist'));

app.get('/', (req, res, err) => {
    res.send(data);
});


let port = process.env.PORT || 3017;
app.listen(port, function () {
    console.log(`Listening on port ${port}`);    
});

module.exports = app;