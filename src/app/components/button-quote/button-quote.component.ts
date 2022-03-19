import { Component, OnInit, EventEmitter } from '@angular/core';

import { Output } from '@angular/core';

@Component({
  selector: 'app-button-quote',
  templateUrl: './button-quote.component.html',
  styleUrls: ['./button-quote.component.css']
})
export class ButtonQuoteComponent implements OnInit {
@Output() changeQuote = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }
  newQuote(){
    this.changeQuote.emit();
  }

}
