import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StudentComponent } from './student/student.component';



import { TicketListComponent } from './tickets/ticket-list/ticket-list.component';
import { TicketFormComponent } from './tickets/ticket-form/ticket-form.component';
import { TicketContainerComponent } from './tickets/ticket-container/ticket-container.component';
import { StudentFormComponent } from './student/student-form/student-form.component';

import { StudentListComponent } from './student/student-list/student-list.component';






const routes: Routes = [
{ path: 'students', component: StudentListComponent },
 { path: 'ticket', component: TicketContainerComponent},




  ///{ path: 'ticketFormulaire', component: TicketFormComponent },

  


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { 
  
}