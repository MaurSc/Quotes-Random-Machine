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
  quotes: Quotes[] = [];
  constructor(
    private quotesService : QuotesService
  ) { }

  ngOnInit(): void {
    this.quotesService.getQuotes().subscribe(quotes =>{
      this.quotes = quotes;
      console.log(quotes)
    });
  }
  changeQuote(){

  }
}
