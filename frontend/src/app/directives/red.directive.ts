import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appRed]'
})


export class RedDirective {

  //diretiva de elemento


  constructor(private el: ElementRef) { 
    el.nativeElement.style.color = 'Red';
  }

}
