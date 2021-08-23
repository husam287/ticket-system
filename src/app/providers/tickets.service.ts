import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
const API_URL = environment.API_URL;
@Injectable({
  providedIn: 'root'
})
export class TicketsService {

  private prices = {_2km:"850",_600m:"825",_600m_kids:"800"}

  constructor(private http:HttpClient) { }

  submitTickets(form){
    return this.http.post<any>(`${API_URL}/tickets/`,form)
  }

  getTicketPrice(type){
    return this.prices[type]
  }
}
