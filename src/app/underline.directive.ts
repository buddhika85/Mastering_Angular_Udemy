import {
  Directive,
  ElementRef,
  HostBinding,
  HostListener,
} from '@angular/core';

@Directive({
  selector: '[appUnderline]',
  standalone: true,
})
export class UnderlineDirective {
  constructor(private element: ElementRef) {}

  @HostBinding('innerText') text = 'Click to underline';

  @HostListener('click') onMouseClick() {
    this.element.nativeElement.style.textDecoration = 'underline';
    this.text = 'Now Im underlined';
  }
}
