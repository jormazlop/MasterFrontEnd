import { Directive, ElementRef, HostListener, OnInit } from '@angular/core';

@Directive({
  selector: '[appRotatingImg]'
})
export class RotatingImgDirective implements OnInit {

  elementSrc: ElementRef;

  buttonClicked: boolean;

  degrees: number;

  constructor(private element: ElementRef) {
    this.elementSrc = element;
    this.buttonClicked = false;
  }

  ngOnInit() {
    this.degrees = 0;
  }

  @HostListener('click', ['$event'])
  onClick() {

    this.degrees = this.buttonClicked? this.degrees - 10 : this.degrees + 10;

    this.elementSrc.nativeElement.style.transform = 'rotate(' + this.degrees + 'deg)';
  }

  @HostListener('document:keydown.Shift', ['$event'])
  onKeyDownTab(event: KeyboardEvent) {
    this.buttonClicked = true;
  }

  @HostListener('document:keyup.Shift', ['$event'])
  onKeyUpTab(event: KeyboardEvent) {
    this.buttonClicked = false;
  }

}
