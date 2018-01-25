import { Component, OnInit } from '@angular/core';
import { OrderService } from '../order.service';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-my-orders',
  templateUrl: './my-orders.component.html',
  styleUrls: ['./my-orders.component.css']
})
export class MyOrdersComponent {
  orders$;

  constructor(private orderService: OrderService, authService: AuthService) {
    console.log(this.orders$ = authService.user$.switchMap( u => orderService.getOrdersByUser(u.uid)));
   }
}
