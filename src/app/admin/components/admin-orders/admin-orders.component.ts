import { Component, OnInit } from '@angular/core';
import { OrderService } from '../../../shared/services/order.service';
import { Subscription } from 'rxjs/Subscription';
import { Order } from '../../../shared/models/order';

@Component({
  selector: 'admin-orders',
  templateUrl: './admin-orders.component.html',
  styleUrls: ['./admin-orders.component.css']
})
export class AdminOrdersComponent{
  subscription: Subscription;
  filteredOrders: any[];
  orders: Order;

  constructor(private orderService: OrderService) {
   this.subscription = this.orderService.getOrders().subscribe(orders => this.filteredOrders = this.orders = orders);
  }

}
