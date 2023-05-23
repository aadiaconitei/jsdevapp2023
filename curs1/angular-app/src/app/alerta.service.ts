import { Injectable } from '@angular/core';

// @Injectable({
//   providedIn: 'root'
// })
@Injectable()
export class AlertaService {

  constructor() { }
  showAlert(message: string) {
    alert(message);
  }
}
