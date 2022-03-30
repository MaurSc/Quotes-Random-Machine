import { Component, OnInit, Inject } from '@angular/core';
import { style, animate, trigger, state, transition } from '@angular/animations';

import { COLORGLOBAL } from '../gobals/colorGlobal';

@Component({
  selector: 'app-background',
  templateUrl: './background.component.html',
  styleUrls: ['./background.component.css'],
  animations: [
    trigger('efecColor', [
      // ...
      state('IndianRed', style({  opacity: 0.8,  backgroundColor: 'IndianRed'})),
      state('FireBrick', style({  opacity: 0.8,  backgroundColor: 'FireBrick'})),
      state('LightPink', style({  opacity: 0.8,  backgroundColor: 'LightPink'})),
      state('DarkOrange', style({  opacity: 0.8,  backgroundColor: 'DarkOrange'})),
      state('DarkKhaki', style({  opacity: 0.8,  backgroundColor: 'DarkKhaki'})),
      state('Violet', style({  opacity: 0.8,  backgroundColor: 'Violet'})),
      state('MediumPurple', style({  opacity: 0.8,  backgroundColor: 'MediumPurple'})),
      state('ForestGreen', style({  opacity: 0.8,  backgroundColor: 'ForestGreen'})),
      state('YellowGreen', style({  opacity: 0.8,  backgroundColor: 'YellowGreen'})),
      state('DarkSlateGray', style({  opacity: 0.8,  backgroundColor: 'DarkSlateGray'})),
      state('LightSlateGray', style({  opacity: 0.8,  backgroundColor: 'LightSlateGray'})),
      state('RosyBrown', style({  opacity: 0.8,  backgroundColor: 'RosyBrown'})),
      transition ('* => *', [
        animate ('.9s')
      ]),
    ]),
  ],
})
export class BackgroundComponent implements OnInit {
  color:string = COLORGLOBAL.color;
  changeC = this.color;

  ngOnInit(): void {
  }

  changeColor(){
    COLORGLOBAL.changeColor()
    this.color = COLORGLOBAL.color;
    this.changeC = this.color;
  }

}
