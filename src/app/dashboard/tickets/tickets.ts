import { Component } from '@angular/core';
import { NewTicketComponent } from "./new-ticket/new-ticket";

@Component({
  selector: 'app-tickets',
  templateUrl: './tickets.html',
  styleUrl: './tickets.css',
  imports: [NewTicketComponent],
})
export class TicketsComponent {

}
