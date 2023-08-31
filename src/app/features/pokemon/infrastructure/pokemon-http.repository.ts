import { Pokemon } from '../domain/pokemon';
import { PokemonRepository } from '../domain/pokemon.repository';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { firstValueFrom } from 'rxjs';
import { Injectable } from '@angular/core';

@Injectable()
export class PokemonHttpRepository implements PokemonRepository {
  private apiBase = environment.apiBase;

  constructor(private http: HttpClient) { }

  find(name: string): Promise<Pokemon> {
    return firstValueFrom(this.http.get<Pokemon>(`${this.apiBase}/pokemon/${name}`));
  }
}