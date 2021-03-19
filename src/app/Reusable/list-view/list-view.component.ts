import { Component, Input, OnInit } from '@angular/core';
import { BookingCard } from '../../Models/BookingCard.model';
@Component({
  selector: 'app-list-view',
  templateUrl: './list-view.component.html',
  styleUrls: ['./list-view.component.scss']
})
export class ListViewComponent implements OnInit {
  @Input() items: BookingCard;
 
  model   = {option: '2'};ji=0;  //payment option selction
  constructor() {
    
   }

  ngOnInit(): void {
    this.pricebasedonhotel();
  }
  pricebasedonhotel(){
    switch(this.model.option) { 
      case "2": { 
        this.ji = 0;
         break; 
      } 
      case "3": { 
        this.ji = 1;
         break; 
      } 
      case "4": {
        this.ji = 2;
         break;    
      } 
      case "5": { 
        this.ji = 3;
         break; 
      }  
      default: { 
        this.ji = 0; 
         break;              
      } 
   }
   
  }
}
