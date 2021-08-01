import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { FormService } from 'src/app/providers/form.service';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.scss']
})
export class PaymentComponent implements OnInit {

  @ViewChild('paymentSection') paymentSection:ElementRef<HTMLElement>;

  /* Tickets info */
  tickets=[]
  totalMoney = 0;
  ticketPrice = 0;
  
  constructor(private router:Router, private formService:FormService) { }

  ngOnInit(): void {
    this.tickets = [...this.formService.form['tickets']];
    this.totalMoney = this.formService.form['totalPrice']
    this.ticketPrice = this.formService.form['ticketPrice']

  }

  goToPay(){
    this.paymentSection.nativeElement.scrollIntoView({behavior:'smooth'})
  }

  pay(){
    this.router.navigateByUrl("paymob_txn_response_callback")
  }

}
