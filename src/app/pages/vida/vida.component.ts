import { Component, OnInit } from '@angular/core';
import { FirestoreService } from '../../services/firebase/firestore.service';
import { LoginService } from '../../services/firebase/login.service';


@Component({
  selector: 'app-vida',
  templateUrl: './vida.component.html',
  styleUrls: ['./vida.component.css']
})
export class VidaComponent implements OnInit {
    constructor(private firestoreService: FirestoreService,
      private loginService: LoginService) { }

  ngOnInit() {
    this.loginService.currentUser().then( resp =>{
      console.log('user logged -->', resp.uid);
    })
    this.firestoreService.getUser('fnWqJgwTOjaAduMD45oiH1ZE8rE3');
  }
}