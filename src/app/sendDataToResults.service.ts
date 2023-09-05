import { outputAst } from '@angular/compiler';
import { EventEmitter, Injectable, Input, Output } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SendDataToResultsService {
  
   //Creamos un Observable
  triggerData$ = new EventEmitter<any> ();

  constructor() { }
  
}
