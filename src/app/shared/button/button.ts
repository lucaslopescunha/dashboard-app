import { Component } from '@angular/core';

@Component({
  selector: 'button[appButton]', /* Every element button that contains appButton
   attribute should be controlled by this component. "button.button" controls a button
   that contains a class button on them.*/
  imports: [],
  templateUrl: './button.html',
  styleUrl: './button.css',
})
export class ButtonComponent {

}
