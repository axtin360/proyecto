import {Component, ViewChild, OnInit } from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';
import {MatSort} from '@angular/material/sort';
import { PokeService } from '../../services/api/poke.service';

@Component({
  selector: 'app-pokedex',
  templateUrl: './pokedex.component.html',
  styleUrls: ['./pokedex.component.css']
})
export class PokedexComponent implements OnInit{
  displayedColumns: string[] = ['n', 'image','imageshiny', 'name', 'type'];
  data: any[] = [];
  dataSource= new MatTableDataSource<any>(this.data);
  pokemons: any[] = [];

  @ViewChild(MatPaginator, {static:true}) paginator: MatPaginator;

  constructor(private pokeService:PokeService) {
  }

  ngOnInit(){
this.getPokemons();
}
getPokemons(){
  let pokemonData;
  for( let i = 1; i <= 151; i++){
    this.pokeService.getPokemons(i).subscribe(
    res => {
      pokemonData = {
        n: i,
        image: res.sprites.front_default,
        imageshiny: res.sprites.front_shiny,
        name: res.name,
        type: res.types[0].type.name,
      };
      this.data.push(pokemonData);
      this.dataSource = new MatTableDataSource<any>(this.data);
      this.dataSource.paginator = this.paginator;
      
    },
    err=>{
      console.log(err);
    }
  );
  }
  
}
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
}




 /* ngOnInit() {
    this.loginService.currentUser().then( resp =>{
      console.log('user logged -->', resp.uid);
    })
    this.firestoreService.getUser('fnWqJgwTOjaAduMD45oiH1ZE8rE3');
  }*/


