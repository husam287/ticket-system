import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-progress-line',
  templateUrl: './progress-line.component.html',
  styleUrls: ['./progress-line.component.scss']
})
export class ProgressLineComponent implements OnInit {

  @Input('step') step: number;
  constructor() { }

  ngOnInit(): void {
  }

}
