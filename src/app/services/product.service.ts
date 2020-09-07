import { Injectable } from '@angular/core';
import {Product} from 'src/app/models/product';
import { AngularFirestore } from '@angular/fire/firestore';


@Injectable({
  providedIn: 'root'
})
export class ProductService {


  constructor(private firestore: AngularFirestore) {

   }
   getProducts() {
    return this.firestore.collection('RecipeIngredients').snapshotChanges();
  }

  
}
