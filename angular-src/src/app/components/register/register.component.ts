import { Component, OnInit } from '@angular/core';
import { ValidationService } from '../../services/validation.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  name: String;
  username: String;
  email: String;
  pwd: String;
 
  constructor(private validationService: ValidationService) { }

  ngOnInit() {
  }

  onSubmit() {
    const user = {
      name: this.name,
      username: this.username,
      email: this.email,
      password: this.pwd
    }

    if (!this.validationService.validateRegisterUser(user)) {
      console.log('User not valid');
    } else {
      console.log('User is valid');
    }

    if (!this.validationService.validateEmail(user.email)) {
      console.log('invalid email');
    }


  }

}
