import { Component, OnInit, ViewChild } from '@angular/core';
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

  /* Error Flags */
  Error_Flag = false;
  ERROR_INPUT_CLASS = "border border-danger"

  /* Form */
  initValues = {}

  constructor(private router:Router, private formService:FormService, private ticketService:TicketsService) { }

  ngOnInit(): void {
    this.initValues = this.formService.form;
  }

  onSubmit(form:NgForm){
    if(!form.valid){
      this.Error_Flag = true;
      return ;
    }

    this.formService.addToForm(form.value);

    let price = this.ticketService.getTicketPrice(form.value.raceType)
    this.formService.addToForm({ticketPrice:price})

    let totalPrice = +form.value.members * price
    this.formService.addToForm({totalPrice})

    console.log(this.formService.form)
    this.router.navigateByUrl('/person-info')
  }
}
