import { Component } from '@angular/core';
import { User } from '../User';
import { users } from '../UsersData';
import { NgFor, NgIf } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-user-list',
  standalone: true,
  imports: [NgFor, NgIf, FormsModule],
  templateUrl: './user-list.component.html',
  styleUrl: './user-list.component.css',
})
export class UserListComponent {
  userList: User[] = users;
  isAddUserOpen: boolean = false;
  userName: string = '';
  userEmail: string = '';
  userPhone: string = '';
  toggleIsAddUserOpen(): void {
    this.isAddUserOpen = !this.isAddUserOpen;
  }
  addUser(): void {
    this.userList.push({
      id: new Date().getTime(),
      name: this.userName,
      email: this.userEmail,
      phones: [this.userPhone],
    });
    this.userName = '';
    this.userEmail = '';
    this.userPhone = '';
    this.toggleIsAddUserOpen();
  }
}
