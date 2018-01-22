import { Component, OnInit } from '@angular/core';
import { ShoppingCartService } from '../shopping-cart.service';
import { ShoppingCart } from '../models/shopping-cart';
import { OnDestroy } from '@angular/core/src/metadata/lifecycle_hooks';
import { Subscription } from 'rxjs/Subscription';
import { OrderService } from '../order.service';
import { AuthService } from '../auth.service';
import { Order } from '../models/order';
import { Router } from '@angular/router';

@Component({
  selector: 'app-check-out',
  templateUrl: './check-out.component.html',
  styleUrls: ['./check-out.component.css']
})
export class CheckOutComponent implements OnInit, OnDestroy { 
  shipping = {}; 
  cart: ShoppingCart;
  cartSubscription: Subscription;
  userId: string;
  userSubscription: Subscription;

  constructor(
    private authService: AuthService,
    private shoppingCartService: ShoppingCartService,
    private orderService: OrderService,
    private router: Router){}
  
  async placeOrder() {
    let order = new Order(this.userId, this.shipping, this.cart);
    let result = await this.orderService.placeOrder(order);
    this.router.navigate(['/order-success',result.key]);
  }
  
  async ngOnInit(){
    let cart$ = await this.shoppingCartService.getCart();
    this.cartSubscription = cart$.subscribe(cart => this.cart = cart);
    this.userSubscription = this.authService.user$.subscribe(user => this.userId = user.uid );
  }

  ngOnDestroy(){
    this.cartSubscription.unsubscribe();
    this.userSubscription.unsubscribe();
  }
}
