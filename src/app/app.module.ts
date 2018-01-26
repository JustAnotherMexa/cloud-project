import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AngularFontAwesomeModule } from 'angular-font-awesome';
import { AngularFireModule } from 'angularfire2';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AdminModule } from 'app/admin/admin.module';
import { ProductFilterComponent } from 'app/shopping/components/products/product-filter/product-filter.component';
import { ProductsComponent } from 'app/shopping/components/products/products.component';
import { ShoppingCartComponent } from 'app/shopping/components/shopping-cart/shopping-cart.component';
import { CustomFormsModule } from 'ng2-validation';
import { DataTableModule } from 'primeng/primeng';
import { SharedModule } from 'shared/shared.module';

import { environment } from '../environments/environment';
import { AdminOrdersComponent } from './admin/components/admin-orders/admin-orders.component';
import { AdminProductsComponent } from './admin/components/admin-products/admin-products.component';
import { ProductFormComponent } from './admin/components/product-form/product-form.component';
import { AdminAuthGuard } from './admin/services/admin-auth-guard.service';
import { AppComponent } from './app.component';
import { BsNavbarComponent } from './core/components/bs-navbar/bs-navbar.component';
import { HomeComponent } from './core/components/home/home.component';
import { LoginComponent } from './core/components/login/login.component';
import { OrderDetailComponent } from './shared/components/order-detail/order-detail.component';
import { AuthGuard } from './shared/services/auth-guard.service';
import { CheckOutComponent } from './shopping/components/check-out/check-out.component';
import { MyOrdersComponent } from './shopping/components/my-orders/my-orders.component';
import { OrderSuccessComponent } from './shopping/components/order-success/order-success.component';
import { ShippingFormComponent } from './shopping/components/shipping-form/shipping-form.component';
import { ShoppingCartSummaryComponent } from './shopping/components/shopping-cart-summary/shopping-cart-summary.component';
import { ClientOrderDetailComponent } from './shopping/components/client-order-detail/client-order-detail.component';
import { AdminOrderDetailComponent } from 'app/admin/components/admin-order-detail/admin-order-detail.component';




@NgModule({
  declarations: [
    AppComponent,
    BsNavbarComponent,
    HomeComponent,
    ShoppingCartComponent,
    ProductsComponent,
    ProductFilterComponent,
    CheckOutComponent,
    OrderSuccessComponent,
    MyOrdersComponent,
    LoginComponent,
    ShoppingCartSummaryComponent,
    ShippingFormComponent,
    ClientOrderDetailComponent,
    
  ],
  imports: [
    BrowserModule,
    SharedModule,
    AdminModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    NgbModule.forRoot(),
    FormsModule,
    CustomFormsModule,
    DataTableModule,
    BrowserAnimationsModule,
    AngularFontAwesomeModule,
    RouterModule.forRoot([
      { path: 'login', component: LoginComponent},
      { path: '', component: ProductsComponent},
      { path: 'shopping-cart', component: ShoppingCartComponent},
      { path: 'products', component: ProductsComponent},
      
      { path: 'check-out', component: CheckOutComponent, canActivate: [AuthGuard]},
      { path: 'order-success/:id', component: OrderSuccessComponent, canActivate: [AuthGuard]},
      { path: 'my/orders', component: MyOrdersComponent, canActivate: [AuthGuard]},
      { path: 'my/orders/:id', component: ClientOrderDetailComponent, canActivate: [AuthGuard]},
      ])
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
