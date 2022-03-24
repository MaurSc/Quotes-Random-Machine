import { Component, OnInit, Output, Input } from '@angular/core';
import { faQuoteLeft } from '@fortawesome/free-solid-svg-icons';
//import service quotes_service
import { QuotesService } from 'src/app/services/quotes.service';
// enum of colors
import {Colors} from '../../models/colors';
@Component({
  selector: 'app-frame',
  templateUrl: './frame.component.html',
  styleUrls: ['./frame.component.css']
})
export class FrameComponent implements OnInit {
  faQuoteLeft = faQuoteLeft;
  quote:any;
  @Input() color:string ="";
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
