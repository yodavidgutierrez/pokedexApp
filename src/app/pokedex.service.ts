import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PokedexService {
  pokelist: Pokemon[] = [ 
    {name: "Charizard",no:1, level:100, type:"Fire", hability: 'Flames', height: '1,7 m', weight: '90,5 kg', img: 'assets/img/chorizo.png'},
    {name: "Moltres",no:1, level:100, type:"Fire", hability: 'Flames', height: '2,0 m', weight: '90,5 kg', img: 'assets/img/moltres.png'},
    {name: "Totodile",no:1, level:5, type:"Water", hability: 'Bubble', height: '0,40 m', weight: '10,5 kg', img: 'assets/img/cocodrilito.png'},
    {name: "Squirtle",no:1, level:5, type:"Water", hability: 'Bubble', height: '0,40 m', weight: '10,5 kg', img: 'assets/img/vamoacalmalno.png'},
    {name: "Pikachu",no:1, level:10, type:"Electric", hability: 'Thunder', height: '0,35 m', weight: '10,5 kg', img: 'assets/img/deadpool.png'}
  ]
  constructor() { }

  getPokemons():Pokemon[]{
    return this.pokelist;
  }
}
export interface Pokemon {
  name:string;
  no:number; 
  level:number;
  type:string;
  hability: string;
  height: string;
  weight: string;
  img: string;
}