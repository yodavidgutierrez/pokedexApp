import { Component } from '@angular/core';
import { Pokemon, PokedexService } from './pokedex.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'pokedex-pragma';
  pokeList: Pokemon[]= [];
  constructor(private pokemons: PokedexService){
      this.pokeList = this.pokemons.getPokemons();
  }

  
}
