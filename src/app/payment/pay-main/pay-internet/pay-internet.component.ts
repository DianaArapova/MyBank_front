import { Component, OnInit, Injectable } from '@angular/core';
import { InternetPay } from '../../../internetPay'
import {HttpClient, HttpHeaders} from '@angular/common/http';


@Component({
  selector: 'app-pay-internet',
  templateUrl: './pay-internet.component.html',
  styleUrls: ['./pay-internet.component.css']
})

@Injectable()
export class PayInternetComponent implements OnInit {
  currentInternetPay: InternetPay = {inn: "", 
    nds: "", bik: "", accountNumber: "", price:""};

  a: Boolean = true;
  constructor(private http: HttpClient) { 
  }

  ngOnInit() {
  }

  onSelect(str) {
    this.currentInternetPay.nds = str;
  }

  clearForm() {
    this.a = true;
    this.currentInternetPay.bik = "";
    this.currentInternetPay.accountNumber = "";
    this.currentInternetPay.inn = "";
    this.currentInternetPay.nds = "";
    this.currentInternetPay.price = "";
  }

  submitForm() {
    const body = {
      bik:this.currentInternetPay.bik, 
      accountNumber: this.currentInternetPay.accountNumber,
      inn: this.currentInternetPay.inn,
      nds: this.currentInternetPay.nds,
      price: this.currentInternetPay.price
    };
    const url = 'http://localhost:3000/internet-payment';
    const headers = new HttpHeaders ({
      'Content-Type': 'application/x-www-form-urlencoded'
    });
    
    this.http.post(url, body,
      {responseType: 'text', headers: headers})
        .subscribe(
          (response: any) => {
            var uri = 'data:text;charset=utf-8,' + response;

            var downloadLink = document.createElement("a");
            downloadLink.href = uri;
            downloadLink.download = "internet_payment.txt";

            document.body.appendChild(downloadLink);
            downloadLink.click();
            document.body.removeChild(downloadLink);
            
            console.log(response);
            this.clearForm();
          }, 
          (error: any) => {
            console.log(error)
          })
  }

  updateButtonDisabled() {
    var regexpBik = new RegExp('^[0-9]{9}$');
    var regexpAccount = new RegExp('^[0-9]{20}$');
    var price = Number(this.currentInternetPay.price);
    this.a = !(regexpAccount.test(this.currentInternetPay.accountNumber) &&
      regexpBik.test(this.currentInternetPay.bik) && 
      !Number.isNaN(price) &&
      price >= 1000 &&
      price <= 75000 &&
      this.currentInternetPay.nds !== "")
  }
}
