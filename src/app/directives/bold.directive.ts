import { Directive, ElementRef, Renderer2, Input } from '@angular/core';

@Directive({
  selector: '[bold]',
  host: {
    '(mouseenter)': 'onMouseEnter()',
    '(mouseleave)': 'onMouseLeave()'
  }
})
export class BoldDirective {
  @Input('bold') el: ElementRef;

  constructor(
    private elRef: ElementRef,
    private renderer: Renderer2
  ) {
    this.renderer.setStyle(this.elRef.nativeElement, 'cursor', 'pointer')
  }

  onMouseEnter() {
    this.setFontWeight('bold');
  }

  onMouseLeave() {
    this.setFontWeight('normal');
  }

  private setFontWeight(val: string) {
    this.renderer.setStyle(this.elRef.nativeElement, 'font-weight', val);
  }

}