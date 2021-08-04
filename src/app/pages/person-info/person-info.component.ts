import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { FormService } from 'src/app/providers/form.service';


@Component({
  selector: 'app-person-info',
  templateUrl: './person-info.component.html',
  styleUrls: ['./person-info.component.scss']
})
export class PersonInfoComponent implements OnInit {

  /* Years Stuff */
  years = [];
  yearMaxLimit = 2013;
  yearMinLimit = 1910;

  /* T-shirt Stuff */
  sizes = ['xs', 's', 'm', 'l', 'xl', 'xxl']

  /* Promo Code */
  havePromo = false;

  /* Ticket Info */
  totalNumberOfMembers = 1;
  currentNumberTicket = 1;
  tickets = [];

  /* Error Flags */
  Error_Flag = false;
  ERROR_INPUT_CLASS = "border border-danger"

  /* Form */
  initValue = {}
  @ViewChild('headerOfTheForm') headerOfTheForm: ElementRef<HTMLElement>;

  constructor(private router: Router, private formService: FormService) { }

  ngOnInit(): void {
    this.makeArrayOfYears();
    this.totalNumberOfMembers = this.formService.form['members'];
    this.currentNumberTicket = this.formService.form['members'];
    this.initValue = this.formService.form['tickets'] ? this.formService.form['tickets'][0] : {};
    console.log("init", this.initValue)
  }

  onSubmit(form: NgForm) {
    if (!form.valid) {
      this.Error_Flag = true;
      this.headerOfTheForm.nativeElement.scrollIntoView({ behavior: 'smooth' })
      return;
    }
    this.Error_Flag = false;

    this.currentNumberTicket--;
    this.tickets.push(form.value)

    let ticketIndex = this.totalNumberOfMembers - this.currentNumberTicket;
    this.initValue = this.formService.form['tickets'] &&
      this.formService.form['tickets'].length - 1 >= ticketIndex &&
      this.formService.form['tickets'][ticketIndex];
    if (!this.initValue) this.initValue = {}
    form.resetForm(this.initValue);

    this.headerOfTheForm.nativeElement.scrollIntoView({ behavior: 'smooth' })

    if (this.currentNumberTicket === 0) {
      this.formService.addToForm({ tickets: this.tickets })
      console.log("Form Now", this.formService.form)
      this.router.navigateByUrl('/confirmation')
    }
  }

  /* Fill Years Array */
  private makeArrayOfYears() {
    for (let year = this.yearMaxLimit; year >= this.yearMinLimit; year--)
      this.years.push(year);
  }


}
