
import { environment } from 'environments/environment';
import { ShoppingCart } from 'shared/models/shopping-cart';
import { PaymentService } from 'shared/services/payment.service';
import { Input, Component, OnInit, HostListener } from '@angular/core';
import { Order } from 'shared/models/order';
import { OrderService } from 'shared/services/order.service';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs/Subscription';
import { AuthService } from 'shared/services/auth.service';
import { OnDestroy } from '@angular/core/src/metadata/lifecycle_hooks';

@Component({
  selector: 'make-payment',
  templateUrl: './make-payment.component.html',
  styleUrls: ['./make-payment.component.css']
})
export class MakePaymentComponent implements OnInit, OnDestroy {
  handler: any;
  userSubscription: Subscription;
  @Input('cart') cart: ShoppingCart;
  @Input('valid') valid: boolean;
  @Input('userId') userId: string;
  @Input('shipping') shipping: {};
  paymentId;

  constructor(private paymentService: PaymentService, private orderService: OrderService, private router: Router) {   }

  ngOnInit() {
    this.handler = StripeCheckout.configure({
      key: environment.stripeKey,
      image: 'https://i.imgur.com/4HrOBuT.png',
      locale: 'auto',
      token: async token => {
        this.paymentId = this.paymentService.processPayment(token, (this.cart.totalPrice * 100));
        let order = new Order(this.userId, this.shipping, this.cart, this.paymentId.key);
        let result = await this.orderService.placeOrder(order);
        this.router.navigate(['/my/orders']);
      }
    });
  }

  ngOnDestroy(){
  }

  async handlePayment() {
    this.handler.open({
      name: 'BurntInk',
      amount: (this.cart.totalPrice * 100)
    });
  }

  @HostListener('window:popstate')
  onPopstate() {
    this.handler.close();
  }

}
