import { state, style, trigger } from '@angular/animations';
import { Component, OnInit, EventEmitter,Output,Input } from '@angular/core';


@Component({
  selector: 'app-button-quote',
  templateUrl: './button-quote.component.html',
  styleUrls: ['./button-quote.component.css'],
  animations: [
    trigger('toggleHide', [
        state('hidden',style({}))
    ]),
  ],
})
export class ButtonQuoteComponent implements OnInit {
@Output() changeQuote = new EventEmitter();
@Input() color:string = "";
  constructor() { }

  ngOnInit(): void {
  }

  newQuote(){
    setTimeout(() =>{
      this.changeQuote.emit();
    },1000);
    
  }

}
