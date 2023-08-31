import { PokemonHttpRepository } from './infrastructure/pokemon-http.repository';
import { FindPokemon } from './application/find-pokemon';

const findPokemonProvider = {
  provide: FindPokemon,
  useFactory: (pokemonHttpRepository: PokemonHttpRepository) => new FindPokemon(pokemonHttpRepository),
  deps: [PokemonHttpRepository],
};

export const pokemonProviders = [
  findPokemonProvider,
];
