'use strict';

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var WineSchema = Schema({
    data: [],

});


module.exports = mongoose.model('Dato', WineSchema);