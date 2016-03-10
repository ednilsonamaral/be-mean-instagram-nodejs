'use strict';

const mongoose = require('mongoose');

const Schema = require('./schema');
const Model = require('./model')(Schema, 'userPass');

const CRUD = {
  create: function(data) {
    console.log("create: ", data);
    SenhaModel.save(function (err, data) {
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
      return console.log('Nome: ', data.name.full, '\nSenha: ', data.password);
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