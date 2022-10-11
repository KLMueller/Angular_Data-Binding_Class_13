import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-first-five-orders',
  templateUrl: './first-five-orders.component.html',
  styleUrls: ['./first-five-orders.component.scss']
})
export class FirstFiveOrdersComponent implements OnInit {
count: number = 0;

  constructor() { }

  ngOnInit(): void {
  }

}
