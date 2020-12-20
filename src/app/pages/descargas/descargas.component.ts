import { Component, OnInit } from '@angular/core';
import { DescargasService, Archivo } from '../../services/descargas/descargas.service';

@Component({
  selector: 'app-descargas',
  templateUrl: './descargas.component.html',
  styleUrls: ['./descargas.component.css']
})
export class DescargasComponent implements OnInit {
 public archivos:Archivo[]=[];

  constructor(private _archivosService: DescargasService) { }

  ngOnInit() {
    this.archivos = this._archivosService.getArchivos();

  }
  
}
