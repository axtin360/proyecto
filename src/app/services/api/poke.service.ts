import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PokeService {

  constructor(private http: HttpClient) { }

 getPokemon() {
    return this.http.get(`https://pokeapi.co/api/v2/pokemon?limit=12&offset=151`);
    
    }

getDataPokemon(name: number){
  return this.http.get(`https://pokeapi.co/api/v2/pokemon/${name}`);
}

getPokemons(index){
  return this.http.get<any>(`https://pokeapi.co/api/v2/pokemon/${index}`);
}

}




