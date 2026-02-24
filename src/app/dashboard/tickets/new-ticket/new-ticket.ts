import { AfterViewInit, Component, ElementRef, output, viewChild, ViewChild } from '@angular/core';
import { ButtonComponent } from '../../../shared/button/button';
import { ControlComponent } from "../../../shared/control/control";
import { FormsModule } from '@angular/forms';
import { tick } from '@angular/core/testing';

@Component({
  selector: 'app-new-ticket',
  imports: [ButtonComponent, ControlComponent, FormsModule],
  templateUrl: './new-ticket.html',
  styleUrl: './new-ticket.css'

})
export class NewTicketComponent implements AfterViewInit {
  //@ViewChild('form') form?: ElementRef<HTMLFormElement>;
  private form = viewChild.required<ElementRef<HTMLFormElement>>('form');
  add = output<{ title: string; text: string }>();
  enteredTitle = '';
  enteredText = '';
  ngAfterViewInit(): void {
    console.log('After View Init', this.form().nativeElement);
  }

  onSubmit() {
    this.add.emit({ title: this.enteredTitle, text: this.enteredText });
    this.form().nativeElement.reset(); // reseta os valores do form.
    //console.dir(titleElement); // prints the object structure
    this.enteredTitle = '';
    this.enteredText = '';
  }
}
