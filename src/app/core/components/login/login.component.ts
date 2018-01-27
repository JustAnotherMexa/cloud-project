import { Component, OnInit, HostBinding } from '@angular/core';
import {AngularFireAuth} from 'angularfire2/auth';
import { AuthService } from '../../../shared/services/auth.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  error: any;
  constructor(private auth: AuthService, private router: Router) {}

  
  login() {
    this.auth.login();
  }

  loginFb() {
    this.auth.loginFb();
  }

  ngOnInit(){

  }

}
