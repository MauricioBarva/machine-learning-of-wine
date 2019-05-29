'use strict';

var mongoose = require('mongoose');
var app = require('./app');
var port = 3333;
mongoose.Promise = global.Promise;

mongoose.connect('mongodb://localhost:27017/machine-learning', { useNewUrlParser: true })
    .then(() => {
        console.log('Base de datos machine-learning corriendo...');
        app.listen(port, () => {
            console.log(`Servidor corriendo en el puerto ${port}`);
        });
    })
    .catch(error => console.log(error));