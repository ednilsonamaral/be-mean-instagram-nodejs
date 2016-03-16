'use strict';

const expect = require('chai').expect;
const ctrl = require('./pokemon-controller');

describe('Controller of Pokemons', () => {
  describe('UPDATE A POKEMON... ', () => {
    const descriptionPokemonzinho = {description: 'olá, tudo bem?!'};
    const attackPokemonzinho = {attack: {$gte: 25}};

    it('expect update a pokemonzinho ', done => {
      ctrl.delete(attackPokemonzinho,(err,data) => {
        expect(err).to.not.exist;
        expect(data._id).to.exist;
        expect(data.attack).to.be.eq(attackPokemonzinho);

        done();
      });
    });
  });
});
