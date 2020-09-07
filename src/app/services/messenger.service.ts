import { Injectable } from '@angular/core';
import {Subject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MessengerService {

  subject = new Subject()
  subject2= new Subject()

  constructor() { }
  sendAddMsg(Product){
    console.log(Product);
    this.subject.next(Product) //triggering an event
  }

  sendRemoveMsg(Product){
    console.log(Product);
    this.subject2.next(Product) //triggering an event
  }

  getAddMsg(){
    return this.subject.asObservable()
  }

  getRemoveMsg(){
    return this.subject2.asObservable() //triggering an event
  }
  
}
