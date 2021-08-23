import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { ProgressLineComponent } from './components/progress-line/progress-line.component';
import { TicketInfoComponent } from './pages/ticket-info/ticket-info.component';
import { PersonInfoComponent } from './pages/person-info/person-info.component';
import { FormsModule } from '@angular/forms';
import { ConfirmationComponent } from './pages/confirmation/confirmation.component';
import { PaymentComponent } from './pages/payment/payment.component';
import { PaymentResultComponent } from './pages/payment-result/payment-result.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    ProgressLineComponent,
    TicketInfoComponent,
    PersonInfoComponent,
    ConfirmationComponent,
    PaymentComponent,
    PaymentResultComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
