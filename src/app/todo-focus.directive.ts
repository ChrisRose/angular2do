import { AfterViewInit, Directive, ElementRef, Renderer} from '@angular/core';

@Directive({
    selector: '[appTodoFocus]'
})
export class TodoFocusDirective implements AfterViewInit {
  constructor(private _el: ElementRef, private renderer: Renderer) {}

  ngAfterViewInit() {
    setTimeout(() => {
      this.renderer.invokeElementMethod(this._el.nativeElement, 'focus', []);
    }, 0);
  }
}
