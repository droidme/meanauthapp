import { Component, OnInit } from '@angular/core';
import { User } from '../../models/user';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  user: User;
 
  constructor() { 
  }

  ngOnInit() {
    this.user = new User();
  }

  onSubmit() {
    if (!this.user.isValid) {
      console.log('User is valid.');
    } else {
      console.log('User is invalid');
    }

    if (!this.user.hasValidEmail) {
      console.log('invalid email address');
    }
  }

}
