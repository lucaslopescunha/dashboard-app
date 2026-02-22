import { Component, input, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-control',
  imports: [],
  templateUrl: './control.html',
  styleUrl: './control.css',
  encapsulation: ViewEncapsulation.None,
  host: {
    class: 'control' /**outra maneira de colocar o control. 
    Interacting with host elements from inside components */
  }
})
export class ControlComponent {
  label = input.required<string>();
}
