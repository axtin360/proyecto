import { Component, OnInit } from '@angular/core';
import { PokeService } from '../../services/api/poke.service';



@Component({
  selector: 'app-solucion',
  templateUrl: './solucion.component.html',
  styleUrls: ['./solucion.component.css']
})
export class SolucionComponent implements OnInit  {

  pokemons: any[] = [];
  constructor(private pokeService:PokeService){
    
  }
ngOnInit(){
this.pokeService.getPokemon().subscribe((resp: any) => {
  resp.results.forEach(result => {
    this.pokeService.getDataPokemon(result.name).subscribe((uniqResponse: any) =>{
      this.pokemons.push(uniqResponse);
      console.log(this.pokemons);
    })
  })
});
}
  

}
