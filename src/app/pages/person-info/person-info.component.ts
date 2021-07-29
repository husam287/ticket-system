import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

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
  sizes = ['xs','s','m','l','xl','xxl']
  
  /* Promo Code */
  havePromo = false;

  constructor() { }

  ngOnInit(): void {
    this.makeArrayOfYears();
  }

  onSubmit(form: NgForm) {

    console.log(`form2`, form);
  }

  /* Fill Years Array */
  private makeArrayOfYears() {
    for (let year = this.yearMaxLimit; year >= this.yearMinLimit; year--)
      this.years.push(year);
  }


}
