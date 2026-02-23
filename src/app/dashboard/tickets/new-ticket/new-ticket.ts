import { Component, ElementRef, ViewChild } from '@angular/core';
import { ButtonComponent } from '../../../shared/button/button';
import { ControlComponent } from "../../../shared/control/control";
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-new-ticket',
  imports: [ButtonComponent, ControlComponent, FormsModule],
  templateUrl: './new-ticket.html',
  styleUrl: './new-ticket.css'

})
export class NewTicketComponent {
  @ViewChild('form') form?: ElementRef<HTMLFormElement>;

  onSubmit(title: string, ticketText: string) {
    console.log("title is", title);
    console.log("ticket input", ticketText);
    //console.dir(form);
    this.form?.nativeElement.reset(); // reseta os valores do form.
    //console.dir(titleElement); // prints the object structure
  }
}
