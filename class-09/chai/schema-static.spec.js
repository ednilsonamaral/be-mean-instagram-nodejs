'use strict';

const expect = require('chai').expect,
      Pokemon = require('./schema-method'),
      util = require('util');

describe('Testando Static', () => {
  const namePokemonzinho = {name: /pikachu/i};

  describe('static... ', () => {
    it('expect name.namePokemonzinho to be eq ', () => {
      Pokemon.findOne(namePokemonzinho, (err, data) => {
        expect(err).to.not.exist;
        expect(data.name).to.be.eq(namePokemonzinho);

        done();
      });
    });
  });
});
