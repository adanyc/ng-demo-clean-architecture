import { Pokemon } from '../domain/pokemon';
import { PokemonRepository } from '../domain/pokemon.repository';

export class FindPokemon {
  constructor(private pokemonRepository: PokemonRepository) { }

  execute(name: string): Promise<Pokemon> {
    return this.pokemonRepository.find(name);
  }
}