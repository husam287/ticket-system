import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  eventName: string = 'Aquaman Challenge';
  eventDate: string = '25th of June 2021';
  eventEmail: string = 'Info@aquamanchallenge.com';

  constructor() { }

  ngOnInit(): void {
  }

}
