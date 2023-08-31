import { Pokemon } from './pokemon';

export interface PokemonRepository {
  find(name: string): Promise<Pokemon>;
}