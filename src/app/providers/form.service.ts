import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FormService {

  form={};
  constructor() { }


  addToForm(subForm){
    this.form = {...this.form , ...subForm};
  }

  clearTheForm(){
    this.form={}
  }
  
  clearTickets(){
    this.form['tickets'] = []
  }
}
