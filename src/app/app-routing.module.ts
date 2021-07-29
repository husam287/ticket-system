import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ConfirmationComponent } from './pages/confirmation/confirmation.component';
import { PaymentComponent } from './pages/payment/payment.component';
import { PersonInfoComponent } from './pages/person-info/person-info.component';
import { TicketInfoComponent } from './pages/ticket-info/ticket-info.component';

const routes: Routes = [
  {path:'',pathMatch:'full',component:TicketInfoComponent},
  {path:'person-info',component:PersonInfoComponent},
  {path:'confirmation',component:ConfirmationComponent},
  {path:'payment/:paymentId',component:PaymentComponent},



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
