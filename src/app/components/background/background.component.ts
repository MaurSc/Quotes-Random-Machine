import { Component, OnInit, Inject } from '@angular/core';
import { DOCUMENT } from '@angular/common';

import {Colors} from '../../models/colors';
@Component({
  selector: 'app-background',
  templateUrl: './background.component.html',
  styleUrls: ['./background.component.css']
})
export class BackgroundComponent implements OnInit {
  color:string = Colors[6];

  //injecto document para poder hacer uso de los metodo y cambiar dinamicamente el color del body
  constructor(@Inject(DOCUMENT) private document: Document) { }

  ngOnInit(): void {
    this.document.body.style.backgroundColor = this.color;
  }

  changeColor(){
    this.document.body.style.backgroundColor = this.color[Math.round(Math.random()* 100)];
  }

}
