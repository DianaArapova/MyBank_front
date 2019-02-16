import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pay-main',
  templateUrl: './pay-main.component.html',
  styleUrls: ['./pay-main.component.css']
})
export class PayMainComponent implements OnInit {
  isCard: boolean = true;

  constructor() { 
  }

  ngOnInit() {
  }

  onSelect(feature: string) {
    if (feature == "card") {
      this.isCard = true;
    }
    else {
      this.isCard = false;
    }
  }
}
