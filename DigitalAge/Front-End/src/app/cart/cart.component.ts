import { Component, OnInit } from '@angular/core';

interface Alert {
  type: string;
  message: string;
}

const ALERTS: Alert[] = [{
  type: 'success',
  message: 'This is a light alert',
}
];

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  constructor() { }
  public  productList = [];
  public alerts: Alert[];

  ngOnInit() {
    this.alerts = ALERTS;
    console.log(this.alerts);
    this.productList = JSON.parse(localStorage.getItem('products'));
   // console.log(this.productList);
  }
  close(alert: Alert) {
    this.productList.splice(this.productList.indexOf(alert), 1);
  }
  reset() {
    this.productList = Array.from(ALERTS);
  }
}
