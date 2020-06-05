import { Directive, OnInit, Input, ViewContainerRef, TemplateRef } from '@angular/core';

@Directive({
  selector: '[myFor]'
})

export class ForDirective implements OnInit {

  //diretiva estrutural
  //no html necessita do *


  //pega os valores após a string 'Em'
  @Input('myForEm') numbers: number[];

  //pega os valores da diretiva após 'Usando'
  //@Input('myForUsando') text: string;


  constructor(
    private container: ViewContainerRef,
    private template: TemplateRef<any>
  )
  { 
    
  }

  ngOnInit() : void{
    //console.log(this.numbers);
    //console.log(this.text);

    for(let number of this.numbers){
      this.container.createEmbeddedView(this.template, { $implicit: number });
    }
  }

}
