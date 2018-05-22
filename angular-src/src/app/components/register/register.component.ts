import { Component, OnInit } from '@angular/core';
import { User } from '../../models/user';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  user: User;
 
  constructor(private toastr: ToastrService) { 
  }

  ngOnInit() {
    this.user = new User();
  }

  onSubmit() {
    if (!this.user.isValid) {
      this.toastr.info('User is valid.');
    } else {
      this.toastr.error('User is invalid');
    }

    if (!this.user.hasValidEmail) {
      this.toastr.error('invalid email address');
    }
  }

}
