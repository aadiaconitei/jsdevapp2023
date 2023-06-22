import { User } from './../models/user';
import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
  users: any[]=[];
  selectedUser: User = { id: 0, nume: '', prenume: '',email:'',datanastere:new Date() ,telefon:''};
  
  constructor(private apiService: ApiService) {}

  ngOnInit(): void {
    this.readUsers();
  }
  readUsers() {
    // read
    this.apiService.readUsers().subscribe((users: User[] ) => {
      this.users = users['users'];
      console.log('am utilizatori',JSON.stringify(this.users));
    });
  }

  createOrUpdateUser(form: { value: User; }) {
    if (this.selectedUser && this.selectedUser.id) {
      this.apiService.updateUser(this.selectedUser.id,form.value).subscribe((user: User) => {
        console.log('User updated', user);
      });
    }
    else {
      this.apiService.createUser(form.value).subscribe((user: User) => {
        this.readUsers();
        console.log('User created, ', user);
      });
    }

  }

  selectUser(user: User) {
    this.selectedUser = user;
  }

  deleteUser(id:number) {
    this.apiService.deleteUser(id).subscribe((user: User) => {
      this.readUsers();
    });
  }

}