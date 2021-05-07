import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TruckService {

  constructor(private firestore: AngularFirestore) {}  

   getTrucks(): Observable<any>{
     return this.firestore.collection('truck').valueChanges();
   }

  //  getDel(): Observable<any>{
  //   return this.firestore.collection('truck').snapshotChanges();
  // }

  addTruck(truck: any) {
    return this.firestore.collection('truck').add(truck);
  }

  delTruck(id: string) {
    return this.firestore.collection('truck').doc(id).delete();
  }
}
