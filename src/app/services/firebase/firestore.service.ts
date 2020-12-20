import { Injectable } from '@angular/core';
import {AngularFirestore} from '@angular/fire/firestore';
import { User } from '../../interfaces/user';

@Injectable({
  providedIn: 'root'
})
export class FirestoreService {

  constructor(private angularfirestore: AngularFirestore) { }

  async createUser(data: User):Promise<any>{
    try {
      const newUser = await this.angularfirestore.collection('usuarios').add(data)
      console.log('newUser');
      return newUser.id;
    } catch (error) {
      return error;
      
    }
  }
  getUser(uid: string){
    try {
      
      this.angularfirestore.firestore.collection('usuarios').where('uid', '==', uid).get().then(querySnapshot => {
        querySnapshot.forEach(resp =>{
          console.log('data recovery drom get -->', resp.data());
        })
      })
    } catch (error) {
      
    }
  }
}
