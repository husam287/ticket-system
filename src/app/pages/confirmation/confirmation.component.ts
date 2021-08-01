import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormService } from 'src/app/providers/form.service';
import { TicketsService } from 'src/app/providers/tickets.service';

@Component({
  selector: 'app-confirmation',
  templateUrl: './confirmation.component.html',
  styleUrls: ['./confirmation.component.scss']
})
export class ConfirmationComponent implements OnInit {

  /* Tickets info */
  tickets=[]
  totalMoney = 0;
  ticketPrice = 0;

  constructor(private router:Router, private formService:FormService, private ticketService:TicketsService) { }

  ngOnInit(): void {
    this.tickets = [...this.formService.form['tickets']];
    this.totalMoney = this.formService.form['totalPrice']
    this.ticketPrice = this.formService.form['ticketPrice']


  }

  onSubmit(){
    console.log(this.formService.form)
    let confirmationCode = this.ticketService.submitTickets(this.formService.form);
    this.router.navigateByUrl(`payment/${confirmationCode}`);
  }

}
