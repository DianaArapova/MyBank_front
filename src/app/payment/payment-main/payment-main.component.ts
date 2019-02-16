import { Component, OnInit, Injectable } from '@angular/core';
import { Payment } from '../../payment'
import {HttpClient, HttpHeaders} from '@angular/common/http';

@Component({
  selector: 'app-payment-main',
  templateUrl: './payment-main.component.html',
  styleUrls: ['./payment-main.component.css']
})

@Injectable()
export class PaymentMainComponent implements OnInit {
  currentPayment: Payment = {inn: "", 
    nds: "", bik: "", accountNumber: "", price:"", telephone:"", email:""};

  a: Boolean = true;
  constructor(private http: HttpClient) { 
  }

  ngOnInit() {
  }

  onSelect(str) {
    this.currentPayment.nds = str;
  }

  clearForm() {
    this.a = true;
    this.currentPayment.bik = "";
    this.currentPayment.email = "";
    this.currentPayment.accountNumber = "";
    this.currentPayment.inn = "";
    this.currentPayment.nds = "";
    this.currentPayment.price = "";
    this.currentPayment.telephone = "";
  }
  
  submitForm() {
    const body = {
      bik:this.currentPayment.bik, 
      email: this.currentPayment.email,
      accountNumber: this.currentPayment.accountNumber,
      inn: this.currentPayment.inn,
      nds: this.currentPayment.nds,
      price: this.currentPayment.price,
      telephone: this.currentPayment.telephone
    };
    const url = 'http://localhost:3000/payment';
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
    var regexpBik = new RegExp('^[0-9]{9}$');
    var regexpAccount = new RegExp('^[0-9]{20}$');
    var price = Number(this.currentPayment.price);
    var regexpEmail = new RegExp('^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z0-9]{1,4}$');
    this.a = !(regexpAccount.test(this.currentPayment.accountNumber) &&
      regexpBik.test(this.currentPayment.bik) &&
      regexpEmail.test(this.currentPayment.email) && 
      !Number.isNaN(price) &&
      price >= 1000 &&
      price <= 75000 &&
      this.currentPayment.telephone !== "" &&
      this.currentPayment.nds !== "")
  }
}
