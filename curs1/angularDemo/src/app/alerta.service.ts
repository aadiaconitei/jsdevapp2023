import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AlertaService {

  constructor() { }

  afiseazaMesaj(mesaj:string){
    alert(mesaj);
  }
}
