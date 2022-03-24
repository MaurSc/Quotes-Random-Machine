import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class QuotesService {
private apiUrl='https://gist.githubusercontent.com/camperbot/5a022b72e96c4c9585c32bf6a75f62d9/raw/e3c6895ce42069f0ee7e991229064f167fe8ccdc/quotes.json';
  constructor(private http:HttpClient) { }


  getQuotes():Observable <any>{
    return this.http.get<any>(this.apiUrl)
    .pipe(map(res => res));
    
  }
}
