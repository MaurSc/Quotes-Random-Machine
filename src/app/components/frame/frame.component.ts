import { Component, OnInit } from '@angular/core';

import { Quotes } from '../../models/Quotes';
//import service quotes_service
import { QuotesService } from 'src/app/services/quotes.service';
@Component({
  selector: 'app-frame',
  templateUrl: './frame.component.html',
  styleUrls: ['./frame.component.css']
})
export class FrameComponent implements OnInit {
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
     });
  }
}
