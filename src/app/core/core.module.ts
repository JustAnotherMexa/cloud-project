import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BsNavbarComponent } from 'app/core/components/bs-navbar/bs-navbar.component';
import { HomeComponent } from 'app/core/components/home/home.component';
import { LoginComponent } from 'app/core/components/login/login.component';
import { SharedModule } from 'shared/shared.module';
import { EmailComponent } from './components/email/email.component';
import { MessageService } from 'primeng/components/common/messageservice';
import { FooterComponent } from './components/footer/footer.component';


@NgModule({
  imports: [
    SharedModule,
    NgbModule.forRoot(),
    RouterModule.forChild([
      { path: 'login', component: LoginComponent},
    ])
  ],
  declarations: [
    BsNavbarComponent,
    HomeComponent,
    LoginComponent,
    EmailComponent,
    FooterComponent,
  ],
  exports: [
    BsNavbarComponent,
    FooterComponent
  ],
  providers: [
    MessageService
  ]
})
export class CoreModule { }
