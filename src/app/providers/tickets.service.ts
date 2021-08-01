import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TicketsService {

  private prices = {_2km:"850",_600m:"825",_600m_kids:"800"}

  constructor() { }

  submitTickets(form){
    /* Sent to server */
    return "xste62Xs"
  }

  getTicketPrice(type){
    return this.prices[type]
  }
}
