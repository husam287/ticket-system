import { Component, OnInit } from '@angular/core';
import { FormService } from 'src/app/providers/form.service';

@Component({
  selector: 'app-payment-result',
  templateUrl: './payment-result.component.html',
  styleUrls: ['./payment-result.component.scss']
})
export class PaymentResultComponent implements OnInit {

  /* Tickets info */
  tickets = []
  totalMoney = 0;
  ticketPrice = 0;

  constructor(private formService:FormService) { }

  ngOnInit(): void {
    this.tickets = [...this.formService.form['tickets']];
    this.totalMoney = this.formService.form['totalPrice']
    this.ticketPrice = this.formService.form['ticketPrice']
  }

}
