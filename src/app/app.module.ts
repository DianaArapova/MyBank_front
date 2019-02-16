import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PaymentComponent } from './payment/payment.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { PayMainComponent } from './payment/pay-main/pay-main.component';
import { PaymentMainComponent } from './payment/payment-main/payment-main.component';
import { PayCardComponent } from './payment/pay-main/pay-card/pay-card.component';
import { PayInternetComponent } from './payment/pay-main/pay-internet/pay-internet.component';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { HeaderInfoComponent } from './header/header-info/header-info.component';
import { HeaderRequisiteComponent } from './header/header-requisite/header-requisite.component';
import { FormsModule } from '@angular/forms';
import { Payment } from './payment'
import { InternetPay } from './internetPay'
import { CardPay } from './cardPay'
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    PaymentComponent,
    HeaderComponent,
    FooterComponent,
    PayMainComponent,
    PaymentMainComponent,
    PayCardComponent,
    PayInternetComponent,
    HeaderInfoComponent,
    HeaderRequisiteComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MDBBootstrapModule.forRoot(),
    BrowserModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
