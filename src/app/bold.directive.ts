import { Directive, ElementRef, Renderer, Input } from '@angular/core';

@Directive({
  selector: '[bold]'
})
export class BoldDirective {
  @Input('bold') el: ElementRef;
  constructor(
    private elRef: ElementRef,
    private renderer: Renderer
  ) {
    this.renderer.setElementStyle(this.elRef.nativeElement, 'font-weight', 'bold')
  }

}