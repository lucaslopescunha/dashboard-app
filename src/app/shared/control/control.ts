import { Component, Host, HostBinding, input, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-control',
  imports: [],
  templateUrl: './control.html',
  styleUrl: './control.css',
  encapsulation: ViewEncapsulation.None,
  host: {
    class: 'control', /** outra maneira de colocar o control. 
    Interacting with host elements from inside components */
    '(click)': 'onClick()',/** When you click in a ngContent item
      ANGULAR TEAM RECOMENDS THIS APPROACH!!!
    */ 
  }
})
export class ControlComponent {
  // @HostBinding('class') className = 'control'; Opção ao host property
  label = input.required<string>();

  onClick() {
    /** ANGULAR TEAM RECOMENDS THIS APPROACH!! */
    console.log('Clicked!');
  }
}
