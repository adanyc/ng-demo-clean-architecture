import { Component } from '@angular/core';
import { Pokemon } from './domain/pokemon';
import { FindPokemon } from './application/find-pokemon';

@Component({
  templateUrl: './pokemon.component.html',
})
export class PokemonComponent {
  pokemon: Pokemon = {} as Pokemon;

  constructor(private findPokemon: FindPokemon) { }

  async find() {
    this.pokemon = await this.findPokemon.execute('ditto');
  }
}
