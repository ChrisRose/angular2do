import { Directive, OnInit, ElementRef, Renderer} from "@angular/core";

@Directive({
    selector: "[todo-focus]"
})
export class TodoFocusDirective {
  constructor(private _el: ElementRef, private renderer: Renderer) {}

  ngAfterViewInit() {
    setTimeout(() => {
      this.renderer.invokeElementMethod(this._el.nativeElement, 'focus', []);
    }, 0);
  }
}
