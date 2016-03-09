'use strict';

const mongoose = require('mongoose');

const Schema = require('./schema');
const Model = require('./model')(Schema, 'fighters');

const CRUD = {
  create: function(data) {
    console.log("create: ", data);
    const FighterModel = new Model(data);
    FighterModel.save(function (err, data) {
      if (err) return console.log('ERRO: ', err);
      return console.log('Inseriu:', data);
    });
  },
  retrieve: function(query) {
    Schema
      .virtual('name.full')
      .get(function (){
        return this.name.first + ' ' + this.name.last;
      });

    Model.findById(query, function (err, data) {
      if (err) return console.log('ERRO: ', err);
      return console.log('Nome: ', data.name.full, '\nCategoria de Peso: ', data.weight_class, '\nIdade: ', data.age);
    });
  },
  retrieve_method: function(query){
    Schema.methods.findSimilarType = function findSimilarType (callback) {
      return this.model('MesmaCategoria', Schema);
    };

    const MethodModel = mongoose.model('MethodModel', Schema);
    const outroFighter = new MethodModel(query);

    outroFighter.findSimilarType(function (err, data){
      if (err) return console.log('ERRO: ', err);
      return data.forEach((fighters) => console.log('fighter: ', fighters));
    });
  },
  retrieve_static: function(query) {
    Schema.statics.search = function (name, callback) {
      return this.where('name', new RegExp(name, 'i')).exec(callback);
    };

    const StaticModel = mongoose.model('StaticModel', Schema);
    const maisOutro = new StaticModel(query);

    maisOutro.search(query, function (err, data) {
      if (err) return console.log('ERRO: ', err);
      return data.forEach((fighters) => console.log('fighter: ', fighters));
    });

  },
  update: function(query, mod, options) {
    var options = options || {};
    Model.update(query, mod, options, function (err, data) {
      if (err) return console.log('ERRO: ', err);
      return console.log('Alterou:', data);
    });
  },
  delete: function(query) {
    Model.remove(query, function (err, data) {
      if (err) return console.log('ERRO: ', err);
      return console.log('Deletou:', data);
    });
  },
};

module.exports = CRUD;