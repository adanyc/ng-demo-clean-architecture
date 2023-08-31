import { NgModule } from '@angular/core';
import { PokemonRoutingModule } from './pokemon-routing.module';
import { PokemonComponent } from './pokemon.component';
import { RepositoryModule } from './infrastructure/repository.module';
import { PokemonHttpRepository } from './infrastructure/pokemon-http.repository';
import { pokemonProviders } from './pokemon.providers';

@NgModule({
  declarations: [
    PokemonComponent,
  ],
  imports: [
    PokemonRoutingModule,
    RepositoryModule,
  ],
  providers: [
    PokemonHttpRepository,
    ...pokemonProviders,
  ],
})
export class PokemonModule { }