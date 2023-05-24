import { Component, OnInit } from '@angular/core';
import { User } from '../model/user';
import { AlertaService } from '../alerta.service';
const HEROES = [
  { id: 1, name: 'Superman' },
  { id: 2, name: 'Batman' },
  { id: 5, name: 'BatGirl' },
  { id: 3, name: 'Robin' },
  { id: 4, name: 'Flash' }
];
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  title: string = 'Componenta Home !!';
  salut: string= 'Bine ati venit la cursul 2';
  nume:string= 'LinkAcademy';
  eroi = HEROES;

  user: User = {
    id: 1,
    nume: 'Popescu',
    prenume: 'Dan',
    email: 'dan@popescu.ro'
  };
  image: string = 'https://upload.wikimedia.org/wikipedia/en/3/35/Supermanflying.png'; // [src]

  showImage: boolean = true;
  nr:number = 1;

  constructor( private alertaService:AlertaService) { }

  ngOnInit(): void {
    this.alertaService.showAlert(' Salut Mihai');
  }


  afiseazaImagine() {
    this.showImage = !this.showImage;
  }
  inputEvent(){
    if(this.nume.length >25){
      this.alertaService.showAlert(`${this.nume} este prea lung`);
    }
  }

}
