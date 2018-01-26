import { Component, OnInit } from '@angular/core';
import { OrderService } from '../../../shared/services/order.service';
import { ActivatedRoute } from '@angular/router';
import { Order } from '../../../shared/models/order';
import { AdminAuthGuard } from '../../../admin/services/admin-auth-guard.service';
import { AppUser } from '../../../shared/models/app-user';
import { AuthService } from '../../../shared/services/auth.service';

@Component({
  selector: 'app-order-detail',
  templateUrl: './order-detail.component.html',
  styleUrls: ['./order-detail.component.css']
})
export class OrderDetailComponent implements OnInit{
  order: Order;
  id;
  appUser: AppUser;
  
  constructor(private route: ActivatedRoute,
    private orderService: OrderService,
    private auth: AuthService) { 
      this.id = this.route.snapshot.paramMap.get('id');
      if (this.id) this.orderService.getOrderById(this.id).valueChanges().take(1).subscribe((o:Order) => this.order = o);
    }

    async ngOnInit(){
      this.auth.appUser$.subscribe(appUser => this.appUser = appUser);
    }

    getSum(){
      let sum = 0;
      let i = 0;
      for (let productId in this.order.items){
        sum += this.order.items[productId].totalPrice;
        i++;
        }
      return sum;
    }

    getCount(){
      let i = 0;
      for (let productId in this.order.items){
        i+= this.order.items[productId].quantity;
        }
      return i;
    }
}
