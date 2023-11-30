import { Component, OnInit } from '@angular/core';
import { TicketService } from '../../../services/ticket/ticket.service';
import { Ticket } from '../../../models/ticket';
import { Router } from '@angular/router';


@Component({
  selector: 'app-ticket-list',
  templateUrl: './ticket-list.component.html',
  styleUrls: ['./ticket-list.component.scss']
})
export class TicketListComponent implements OnInit {

  public ticketList: Ticket[] = [];
  public displayTicketArchived: boolean = false;


  constructor(public ticketService: TicketService,private router: Router) {
    this.ticketService.tickets$.subscribe((tickets) => this.ticketList = tickets);
  }

  ngOnInit() {
  }

  ticketHasBeenSelected(hasBeenSelected: boolean) {
    console.log('event received from child:', hasBeenSelected);
  }



  deleteTicket(ticket: Ticket) {
  this.ticketService.deleteTicket(ticket);
  }


  
  ArchiveTicket(t: Ticket) {
    this.ticketService.ArchiveTicket(t);
  }

  navigateToTicketPage(): void {
    this.router.navigate(['/students']);
  }
  

}
