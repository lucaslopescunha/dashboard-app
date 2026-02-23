import { Component } from '@angular/core';
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
 onSubmit(titleElement: HTMLInputElement) {
  console.log("title is", titleElement.value);
  //console.dir(titleElement); // prints the object structure
 }
}
