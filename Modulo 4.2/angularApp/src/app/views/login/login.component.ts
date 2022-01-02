import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/user.model';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  userLogin: User = {
    username: '',
    password: '',
    type: ''
  };

  loginError: boolean;

  isLoading: boolean;

  constructor(
    private authentication: AuthenticationService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.loginError = false;
    this.isLoading = false;
  }

  login(): void {

    this.isLoading = true;

    this.authentication.login(this.userLogin.username, this.userLogin.password).subscribe(response => {

      if(response) {
        this.router.navigate(['/dashboard']);
      } else {
        this.userLogin.username = '';
        this.userLogin.password = '';
        this.userLogin.type = '';
        this.loginError = true;
      }

      this.isLoading = false;
    })

  }

}
