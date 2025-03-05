import { CommonModule } from '@angular/common';
import { Component,  Input, OnInit, } from '@angular/core';
import { RouterModule } from '@angular/router';
import {  IonicModule } from '@ionic/angular'


@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.scss'],
  standalone : false
})
export class ProductCardComponent  implements OnInit {


  @Input() product: any;

  getStars(rating: number): any[] {
    return Array(Math.round(rating));
  }

  

  constructor() { }

  ngOnInit() {}

  

}
