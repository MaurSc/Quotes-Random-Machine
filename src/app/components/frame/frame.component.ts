import { Component, OnInit, Output, Input,EventEmitter } from '@angular/core';
import { faQuoteLeft } from '@fortawesome/free-solid-svg-icons';
//import service quotes_service
import { QuotesService } from 'src/app/services/quotes.service';
@Component({
  selector: 'app-frame',
  templateUrl: './frame.component.html',
  styleUrls: ['./frame.component.css']
})
export class FrameComponent implements OnInit {
  @Input() color:string ="";
  @Output() changeColor = new EventEmitter();
  faQuoteLeft = faQuoteLeft;
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
     this.changeColor.emit();
  }
}
