import { Component, OnInit, Output, Input,EventEmitter } from '@angular/core';
import { trigger, state, style, transition, animate } from '@angular/animations';

import { faQuoteLeft } from '@fortawesome/free-solid-svg-icons';
//import service quotes_service
import { QuotesService } from 'src/app/services/quotes.service';
@Component({
  selector: 'app-frame',
  templateUrl: './frame.component.html',
  styleUrls: ['./frame.component.css'],
  animations: [
    trigger('textAni', [
      // ...
      state('current', style({opacity: 1}),),
      state('next', style({opacity: 1})),
      transition ('current => next', [
        style({
          opacity: 0
        }),
        animate ('1s')
      ]),
      transition ('next => current', [
        style({
          opacity: 0
        }),
        animate ('1s')
      ])
    ]),
  ],
})
export class FrameComponent implements OnInit {
  @Input() color:string ="";
  @Output() changeColor = new EventEmitter();
  faQuoteLeft = faQuoteLeft;
  divText="current"
  quote:any;
  
  constructor(
    private quotesService : QuotesService
  ) { }

  ngOnInit(){
    this.changeQuote();
  }
  
  changeQuote(){

    this.quotesService.getQuotes().subscribe(
      res =>{
      this.quote = res.quotes[Math.round(Math.random()* 100)];
      this.divText = this.divText=="current"? "next":"current";
     });
     this.changeColor.emit();
     
  }
}
