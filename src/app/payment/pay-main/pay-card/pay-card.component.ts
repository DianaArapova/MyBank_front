import { Component, OnInit, Injectable } from '@angular/core';
import { CardPay } from '../../../cardPay'
import { Headers, Http, Response } from '@angular/http';
import {HttpClient, HttpHeaders} from '@angular/common/http';

@Component({
  selector: 'app-pay-card',
  templateUrl: './pay-card.component.html',
  styleUrls: ['./pay-card.component.css']
})

@Injectable()
export class PayCardComponent implements OnInit {
  cardPay: CardPay = {
    cardNumber: "",
    mm: "",
    gg: "",
    cvc: "",
    fio: "",
    sum: NaN,
    comment: "",
    email: "",
  }
  users;
  a: Boolean = true;
  constructor(private http: HttpClient) { }

  ngOnInit() {
  }

  clearForm() {
    this.cardPay.sum = NaN;
    this.cardPay.cardNumber = "";
    this.cardPay.mm = "";
    this.cardPay.gg = "";
    this.cardPay.cvc = "";
    this.cardPay.fio = "";
    this.cardPay.comment = "";
    this.cardPay.email = "";
  }

  submitForm() {
    const body = {
      cardNumber: this.cardPay.cardNumber,
      sum: this.cardPay.sum,
      mm: this.cardPay.mm,
      gg: this.cardPay.gg,
      cvc: this.cardPay.cvc,
      fio: this.cardPay.fio,
      comment: this.cardPay.comment,
      email: this.cardPay.email 
    };
    const url = 'http://localhost:3000/card-payment';
    const headers = new HttpHeaders ({
      'Content-Type': 'application/x-www-form-urlencoded'
    });
    
    this.http.post(url, JSON.stringify(body), 
      {responseType: 'text', headers: headers})
        .subscribe(
          (response: any) => {
            console.log(JSON.stringify(body));
            console.log(response);
            this.clearForm();
          }, 
          (error: any) => {
            console.log(error)
          });
  }

  updateButtonDisabled() {
    var regexpEmail = new RegExp('^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z0-9]{1,4}$');
    
    if (this.cardPay.sum >= 1000 && this.cardPay.sum <= 75000 &&
      this.cardPay.cardNumber !== "" &&
      this.cardPay.mm != "" &&
      this.cardPay.gg != "" &&
      this.cardPay.cvc != "" &&
      regexpEmail.test(this.cardPay.email))
    {
      this.a = false;
    }
    else {
      this.a = true;
    }
  }
}
