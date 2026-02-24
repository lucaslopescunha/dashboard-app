import { Component, input, output, signal } from '@angular/core';
import { Ticket } from '../ticket.model';

@Component({
  selector: 'app-ticket',
  imports: [],
  templateUrl: './ticket.html',
  styleUrl: './ticket.css',
})
export class TicketComponent {
  data = input.required<Ticket>();
  detailsVisible = signal(false);
  // close = output({alias: 'closeTicket'}); setting alias
  close = output()

  onToggleDetails() {
    this.detailsVisible.update((wasVisible) => !wasVisible);
  }
  onMarkAsCompleted() {
    this.close.emit();
  }
}
