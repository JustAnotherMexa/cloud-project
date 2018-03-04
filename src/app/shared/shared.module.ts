import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CustomFormsModule } from 'ng2-validation';
import { DataTableModule, GrowlModule, MessageModule, MessagesModule, LightboxModule } from 'primeng/primeng';
import { OrderDetailComponent } from 'shared/components/order-detail/order-detail.component';
import { ProductCardComponent } from 'shared/components/product-card/product-card.component';
import { ProductQuantityComponent } from 'shared/components/product-quantity/product-quantity.component';
import { AuthGuard } from 'shared/services/auth-guard.service';
import { AuthService } from 'shared/services/auth.service';
import { CategoryService } from 'shared/services/category.service';
import { OrderService } from 'shared/services/order.service';
import { PaymentService } from 'shared/services/payment.service';
import { ProductService } from 'shared/services/product.service';
import { ShoppingCartService } from 'shared/services/shopping-cart.service';
import { UserService } from 'shared/services/user.service';
import { DropZoneDirective } from './drop-zone.directive';
import { FileUploadComponent } from 'shared/components/file-upload/file-upload.component';
import { FileSizePipe } from './file-size.pipe';
import { UploadService } from 'shared/services/upload.service';
import {ProgressBarModule} from 'primeng/progressbar';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    CustomFormsModule,
    DataTableModule,
    MessagesModule,
    MessageModule,
    GrowlModule,
    LightboxModule,
    ProgressBarModule
  ],
  declarations: [
    ProductCardComponent,
    ProductQuantityComponent,
    OrderDetailComponent,
    DropZoneDirective,
    FileUploadComponent,
    FileSizePipe
  ],
  exports: [
    ProductCardComponent,
    ProductQuantityComponent,
    OrderDetailComponent,
    FormsModule,
    CustomFormsModule,
    CommonModule,
    DataTableModule,
    MessagesModule,
    MessageModule,
    GrowlModule,
    FileUploadComponent,
    ProgressBarModule
  ],
  providers: [
    AuthService,
    AuthGuard,
    UserService,
    CategoryService,
    ProductService,
    ShoppingCartService,
    OrderService,
    PaymentService,
    UploadService
  ],
  
})
export class SharedModule { }
