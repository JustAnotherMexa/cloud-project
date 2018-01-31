import { Component, OnInit, HostBinding } from '@angular/core';
import { AuthService } from '../../../shared/services/auth.service';
import {Router} from '@angular/router';
import { Message } from 'primeng/components/common/message';
import { MessageService } from 'primeng/components/common/messageservice';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  error: any;
  msgs: Message[] = [];
  user = {
    email: '',
    password: ''
 };

  constructor(private auth: AuthService, private router: Router,private messageService: MessageService) {}

  loginG() {
    this.auth.login();
  }

  loginE() {
    this.auth.loginE(this.user.email, this.user.password)
    .then((res) => {
        this.router.navigate([''])
      })
    .catch((err) => this.messageService.add({severity:'error', summary:err }));
  }

  loginFB() {
    this.auth.loginFb()
    .then((res) => {
        this.router.navigate([''])
      })
      .catch((err) => {
        this.messageService.add({severity:'error', summary:err });
      } );
  }

  loginT() {
    this.auth.loginT()
    .then((res) => {
        this.router.navigate([''])
      })
    .catch((err) => this.msgs.push({severity:'error', summary: err }));
  }

  loginGit() {
    this.auth.loginGit()
    .then((res) => {
        this.router.navigate([''])
      })
    .catch((err) => this.msgs.push({severity:'error', summary: err }));
  }

  ngOnInit(){

  }

}
