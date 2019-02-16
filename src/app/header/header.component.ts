import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  infoOn: boolean;
  requisiteOn: boolean;

  constructor() { }

  ngOnInit() {
  }

  onSelectInfo() {
    if (this.infoOn)
      this.infoOn = false;
    else
      this.infoOn = true;
  }

  onSelectRequisite() {
    if (this.requisiteOn)
      this.requisiteOn = false;
    else
      this.requisiteOn = true;
  }
}
