import { Component, Host, HostBinding, HostListener, input, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-control',
  imports: [],
  templateUrl: './control.html',
  styleUrl: './control.css',
  encapsulation: ViewEncapsulation.None
})
export class ControlComponent {
  @HostBinding('class') className = 'control';// Opção ao host property
  @HostListener('click') onClick() {
    console.log('Clicked!');
  }
  label = input.required<string>();

  //onClick() {
    /** ANGULAR TEAM RECOMENDS THIS APPROACH!! */
    //console.log('Clicked!');
  //}
}
