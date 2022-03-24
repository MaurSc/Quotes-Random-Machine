import { Component, OnInit, EventEmitter,Output,Input } from '@angular/core';


@Component({
  selector: 'app-button-quote',
  templateUrl: './button-quote.component.html',
  styleUrls: ['./button-quote.component.css']
})
export class ButtonQuoteComponent implements OnInit {
@Output() changeQuote = new EventEmitter();
@Input() color:string = "";
  constructor() { }

  ngOnInit(): void {
  }

  newQuote(){
    this.changeQuote.emit();
    console.log("boton")
  }

}
