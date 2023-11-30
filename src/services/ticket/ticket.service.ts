import { Injectable } from '@angular/core';
import { Ticket } from '../../models/ticket';
import { TICKETS_MOCKED } from '../../mocks/tickets.mock';
import { BehaviorSubject } from 'rxjs/index';

@Injectable({
  providedIn: 'root'
})
export class TicketService {
  /**
   * Services Documentation:
   * https://angular.io/docs/ts/latest/tutorial/toh-pt4.html
   */

  private ticketList: Ticket[] = TICKETS_MOCKED;

  /**
   * Observable which contains the list of the tickets.
   * Naming convention: Add '$' at the end of the variable name to highlight it as an Observable.
   */
  public tickets$: BehaviorSubject<Ticket[]> = new BehaviorSubject(this.ticketList);


  constructor() {

    
  }

  addTicket(ticket: Ticket) {

      this.ticketList.push(ticket);
      this.tickets$.next(this.ticketList);

    // You need here to update the list of ticket and then update our observable (Subject) with the new list
    // More info: https://angular.io/tutorial/toh-pt6#the-searchterms-rxjs-subject
  }



  deleteTicket(ticket: Ticket) {
  this.ticketList.pop();
   this.tickets$.next(this.ticketList);
 }



  ArchiveTicket(ticket: Ticket) {
    
    ticket.archived = true;
    this.tickets$.next(this.ticketList);
  }

  

  
}




// EX3 - Source
// Source1 pour ajoute un elements ds liste : https://blog.codewise.fr/angular-services-introduction
// Source2 mise a jour : https://www.telerik.com/blogs/angular-basics-step-by-step-understanding-async-pipe






// https://blog.codewise.fr/angular-services-introduction