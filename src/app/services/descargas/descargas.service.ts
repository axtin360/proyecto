import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DescargasService {

   private archivos: Archivo[] =
 [
      {
       nombre: 'Navegadores',
       direccion:[
         
         {
           url: "assets/doc/ChromeSetup.exe",
           img: "assets/img/chrome.png",
         },
         {
           url: "assets/doc/FirefoxSetup.exe",
           img: "assets/img/mozilla.png",
         },
          {
           url: "assets/doc/OperaSetup.exe",
           img: "assets/img/opera.png",
         },
         
       ]
     },
     {
       nombre: 'otros',
       direccion:[
         {
           url: "assets/doc/mozilla-thunderbird-52-2-1.exe",
           img: "assets/img/Mozilla_Thunderbird_logo.png",
         },
         {
           url: "assets/doc/7z1900-x64.exe",
           img: "assets/img/7-zip.png",
         },
         {
           url: "assets/doc/Teams_windows_x64.exe",
           img: "assets/img/teams.png",
         }
       ]
     },
     
  ];

  getArchivos(): Archivo[]{
  return this.archivos;
  }

}

export interface Archivo{

  nombre: string;
  direccion: {
    img: string;
    url: string;
  }[];
}