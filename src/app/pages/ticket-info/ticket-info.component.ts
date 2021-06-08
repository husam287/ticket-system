import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-ticket-info',
  templateUrl: './ticket-info.component.html',
  styleUrls: ['./ticket-info.component.scss']
})
export class TicketInfoComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit(): void {
  }

  onSubmit(form:NgForm){
    console.log(form.value);
    this.router.navigateByUrl('/person-info')
  }
}
