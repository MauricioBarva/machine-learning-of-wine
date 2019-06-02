'use strict';
var wine_data = require('../wine-data.json');
var Wine = require('../models/wine');
var controller = {
    home: function(req, res) {
        return res.status(200).send(`<h1>Bienvenido a mi pagina de machine-learning</h1>`);
    },
    saveData: function(req, res) {
        var data_id = "5cedeed90681c39745ee9807";

        Wine.findByIdAndUpdate(data_id, { "$push": { data: wine_data } }, { new: true }, (error, data_stored) => {
            if (error) return res.status(500).send({ message: 'No se pudo guardar la información.' });
            if (!data_stored) return res.status(404).send({ message: 'La información no existe.' });
            return res.status(200).send(data_stored);
        });
    },
    createData: function(req, res) {
        var data_id = "5cedeed90681c39745ee9807";
        var body = req.body;
        var wine = {
            fixedAcidity: body.fixedAcidity,
            volatileAcidity: body.volatileAcidity,
            citricAcid: body.citricAcid,
            residualSugar: body.residualSugar,
            chlorides: body.chlorides,
            freeSulfurDioxide: body.freeSulfurDioxide,
            totalSulfurDioxide: body.totalSulfurDioxide,
            density: body.density,
            pH: body.pH,
            sulphates: body.sulphates,
            alcohol: body.alcohol,
            quality: body.quality,
        }
        Wine.findById(data_id)
            .then(wine_data => {
                wine_data.data.push(wine);
                wine_data.save();
                return res.status(200).send(wine_data);
            })
            .catch(error => res.status(500).send(error));
    },
    getData: function(req, res) {
        var data_id = "5cedeed90681c39745ee9807";
        Wine.findById(data_id, (error, data_wine) => {
            if (error) return res.status(500).send({ message: 'Error al devolver los datos.' });
            if (!data_wine) return res.status(404).send({ message: 'No se encontro información' });
            return res.status(200).send(data_wine);
        });
    }
}

module.exports = controller;