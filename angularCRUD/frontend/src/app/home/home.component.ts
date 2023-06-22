import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { User } from '../models/user';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  users:User[] = [];

  constructor(private apiService:ApiService) { }

  ngOnInit(): void {
    this.apiService.readUsers().subscribe((users: User[]) => {
      //console.log(users['users']);
      this.users = users['users'];
     
    });
  }

}
