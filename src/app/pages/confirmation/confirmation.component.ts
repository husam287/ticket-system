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
  tickets = []
  totalMoney = 0;
  ticketPrice = 0;

  constructor(private router: Router, private formService: FormService, private ticketService: TicketsService) { }

  ngOnInit(): void {
    this.tickets = [...this.formService.form['tickets']];
    this.totalMoney = this.formService.form['totalPrice']
    this.ticketPrice = this.formService.form['ticketPrice']


  }

  onSubmit() {
    const form = this.formService.form;
    console.log("final: ",this.formService.form);
    const ticket = {
      first_name: form.tickets[0].name.split(' ')[0],
      last_name: form.tickets[0].name.split(' ')[1]?form.tickets[0].name.split(' ')[1]:'none',
      email:form.tickets[0].email,
      phone_number:form.tickets[0].phone,
      year_of_birth:+form.tickets[0].yearOfBirth,
      gender:form.tickets[0].gender,
      race_type:form.members==='1'?'individual': form.members==='3'? 'triple':'five',
      race_name:form.raceType.slice(1),
      swimming_pace:form.tickets[0].pace,
      team_name:form.name,
      tshirt:form.tickets[0].shirtSize,
    }
    this.ticketService.submitTickets(ticket)
      .subscribe(({ payment_iframe }) => {
        console.log("payment_iframe",payment_iframe);
        this.router.navigateByUrl(`payment/${payment_iframe}`);
      });
  }

}
