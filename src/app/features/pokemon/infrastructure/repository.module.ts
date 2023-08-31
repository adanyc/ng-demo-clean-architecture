
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

// export const POKEMON_REPOSITORY = new InjectionToken<PokemonRepository>('PokemonRepository');

@NgModule({
  imports: [
    HttpClientModule,
  ],
  // providers: [
  //   {
  //     provide: POKEMON_REPOSITORY,
  //     useFactory: (httpClient: HttpClient) => new PokemonHttpRepository(httpClient),
  //     deps: [
  //       HttpClient,
  //     ],
  //   },
  // ],
})
export class RepositoryModule { }