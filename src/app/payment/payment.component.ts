import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css']
})
export class PaymentComponent implements OnInit {
  isPay: boolean = true;

  constructor() { 
  }

  onSelect(feature: string) {
    if (feature === "pay"){
      this.isPay = true;
    }
    else {
      this.isPay = false;
    }
  }

  ngOnInit() {
    
  }

}
