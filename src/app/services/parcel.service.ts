import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ParcelService {

  constructor(private firestore: AngularFirestore) { }

  getParcels(): Observable<any>{
    return this.firestore.collection('parcel').valueChanges();
  }
}
