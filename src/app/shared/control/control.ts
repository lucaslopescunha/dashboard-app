import { afterEveryRender, afterNextRender, Component, contentChild, ContentChild, ElementRef, inject, input, ViewEncapsulation } from '@angular/core';

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
      ANGULAR TEAM RECOMENDS THIS APPROACH!!! Event Listening.
    */
  }
})
export class ControlComponent {
  // @HostBinding('class') className = 'control'; Opção ao host property
  label = input.required<string>();
  private el = inject(ElementRef);
  /** ElementRef Is a class defined by angular framework which defines a 
    reference to some element thats rendered to the page. Can refer to any element
    on the page. Angular will give you access to the host element of that component.
    app-control in case. */
  //@ContentChild('input') private control?: ElementRef<HTMLInputElement | HTMLTextAreaElement>;
  private control = contentChild<ElementRef<HTMLInputElement | HTMLTextAreaElement>>('input');

  constructor() {
    afterEveryRender(() => {
      console.log('afterEveryRender'); /**Evertime something changes in the webpage 
      Must be called in a injection context.*/
    });
    afterNextRender(() => {
      console.log('afterNextRender'); /**
      	Executa apenas uma vez após o próximo ciclo de renderização completo. */
    })
  }

  onClick() {
    /** ANGULAR TEAM RECOMENDS THIS APPROACH!! */
    console.log('Clicked!');
    console.log(this.el);
    console.log(this.control());
  }

}
