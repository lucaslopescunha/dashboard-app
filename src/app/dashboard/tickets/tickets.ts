import { Component } from '@angular/core';
import { NewTicketComponent } from "./new-ticket/new-ticket";
import { Ticket } from './ticket.model';
import { randomUUID } from 'node:crypto';
import { TicketComponent } from "./ticket/ticket";

@Component({
  selector: 'app-tickets',
  templateUrl: './tickets.html',
  styleUrl: './tickets.css',
  imports: [NewTicketComponent, TicketComponent],
})
export class TicketsComponent {
  tickets: Ticket[] = [];

  onAdd(ticketData: {title: string; text: string}) {
    const ticket: Ticket = {
      title: ticketData.title,
      request: ticketData.text,
      id: (Math.floor(Math.random() * (100000 - 1 + 1)) + 1) + '' ,
      status: 'open'
    }
    this.tickets.unshift(ticket);
  }
  onCloseTicket(id: string) {
    this.tickets = this.tickets.map((ticket)=> {
      if(ticket.id === id) {
        /** JS expression ... ticket creates a copy of the ticket
         * object. And now we're changing the status.
         */
        return { ...ticket, status: 'closed'}
      }
      return ticket;
    })
  }
}
