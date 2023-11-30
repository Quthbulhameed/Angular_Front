import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router'; 

import { AppComponent } from './app.component';
import { TicketComponent, TicketFormComponent, TicketListComponent } from './tickets';
import { TicketService } from '../services/ticket/ticket.service';
import { ReactiveFormsModule } from '@angular/forms';
import { HeaderComponent } from './header/header.component';
import {HttpClientModule} from '@angular/common/http';
import { StudentComponent } from './student/student.component';
import { AppRoutingModule } from './app-routing.module';
import { TicketContainerComponent } from './tickets/ticket-container/ticket-container.component';
import { StudentFormComponent } from './student/student-form/student-form.component';
import { StudentListComponent } from './student/student-list/student-list.component';







@NgModule({
  declarations: [
    AppComponent,
    TicketComponent,
    TicketFormComponent,
    TicketListComponent,
    HeaderComponent,
    StudentComponent,
    TicketContainerComponent, // All the components needs to be declared
    TicketContainerComponent, 
    StudentFormComponent, 
    StudentListComponent,
    StudentComponent
    
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule, // Import all dependencies
    HttpClientModule,
    RouterModule,
    AppRoutingModule
    
  ],
  providers: [TicketService], // All the services need to be provided
  bootstrap: [AppComponent]
})
export class AppModule {
}
