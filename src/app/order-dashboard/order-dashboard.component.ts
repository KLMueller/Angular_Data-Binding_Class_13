import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-order-dashboard',
  templateUrl: './order-dashboard.component.html',
  styleUrls: ['./order-dashboard.component.scss'],
})
export class OrderDashboardComponent implements OnInit {
  showOrder: boolean = false;
  count: number = 0;
  allOrders = [];

  public eachOrder = setInterval(() => {
    // keeps the timer from starting right away
    if (this.showOrder !== !setInterval)
      // sets 2 second interval times
      this.allOrders.push(this.count++);
  }, 2000);

  public orderStart() {
    // starts up the setInterval() by changing the value of showOrder
    this.showOrder = !this.showOrder;
    this.eachOrder;
  }

  public orderStop() {
    clearInterval(this.eachOrder);
  }

  constructor() {}

  ngOnInit(): void {}
}
