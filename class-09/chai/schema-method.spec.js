'use strict';

const expect = require('chai').expect,
      Pokemon = require('./schema-method'),
      util = require('util');

describe('Testando Methods', () => {
  const namePokemonzinho = {name: 'Pikachu'};
  const typePokemonzinho = {type: 'fogo'};
  
  describe('method... ', () => {
    it('expect type.typePokemonzinho to be eq ', () => {
      Pokemon.findOne(typePokemonzinho, (err, data) => {
        expect(err).to.not.exist;
        expect(data.type).to.be.eq(typePokemonzinho);

        done();
      });
    });
  });
});
