import { Injectable } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';
import { ShoppingCartService } from './shopping-cart.service';
import { FirebaseApp } from 'angularfire2';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class OrderService {

  constructor(
    private shoppingCartService: ShoppingCartService,
    private db: AngularFireDatabase,
    private fbApp: FirebaseApp) { }

  async placeOrder(order){ 
    let result = await this.db.list('/orders').push(order);
    this.shoppingCartService.clearCart();   

    return result;
  }

  getOrders(): Observable<any> {
    return this.db.list('/orders').snapshotChanges().map(actions => {
      return actions.map(action => ({ key: action.key, ...action.payload.val() }));
    });
  }

  getOrderSimple(){
    return this.db.list('/orders').valueChanges();
  }

  getOrdersByUser(userId: string) {
    return this.db.list('/orders', ref =>  ref.orderByChild('userId').equalTo(userId)).snapshotChanges().map(actions => {
      return actions.map(action => ({ key: action.key, ...action.payload.val() }));
    });
  }

  getOrderById(orderId: string){
    return this.db.object('/orders/'+ orderId);
  }
}
