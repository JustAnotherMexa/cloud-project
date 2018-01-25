import { Component, OnInit, HostListener, Input } from '@angular/core';
import { PaymentService } from '../payment.service';
import { environment } from '../../../environments/environment';

@Component({
  selector: 'make-payment',
  templateUrl: './make-payment.component.html',
  styleUrls: ['./make-payment.component.css']
})
export class MakePaymentComponent implements OnInit {
  @Input('order') order: any;
  handler: any;

  constructor() { }

  ngOnInit() {
  }

}
