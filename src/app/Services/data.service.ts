import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  
  constructor() {}
  private messageSource = new BehaviorSubject('');
  receivedData = this.messageSource.asObservable();



  sendData(message: string) {
    this.messageSource.next(message);
  }
}