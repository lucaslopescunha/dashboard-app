import { Component } from '@angular/core';
import { NewTicketComponent } from "./new-ticket/new-ticket";
import { Ticket } from './ticket.model';

@Component({
  selector: 'app-tickets',
  templateUrl: './tickets.html',
  styleUrl: './tickets.css',
  imports: [NewTicketComponent],
})
export class TicketsComponent {
  tickets: Ticket[] = [];
}
