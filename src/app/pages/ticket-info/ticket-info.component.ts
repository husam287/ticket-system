import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { FormService } from 'src/app/providers/form.service';
import { TicketsService } from 'src/app/providers/tickets.service';

@Component({
  selector: 'app-ticket-info',
  templateUrl: './ticket-info.component.html',
  styleUrls: ['./ticket-info.component.scss']
})
export class TicketInfoComponent implements OnInit {

  constructor(private router:Router, private formService:FormService, private ticketService:TicketsService) { }

  ngOnInit(): void {
  }

  onSubmit(form:NgForm){
    
    this.formService.addToForm(form.value);

    let price = this.ticketService.getTicketPrice(form.value.raceType)
    this.formService.addToForm({ticketPrice:price})

    let totalPrice = +form.value.members * price
    this.formService.addToForm({totalPrice})

    console.log(this.formService.form)
    this.router.navigateByUrl('/person-info')
  }
}
