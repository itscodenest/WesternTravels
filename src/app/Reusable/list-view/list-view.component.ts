import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BookingCard } from '../../Models/BookingCard.model';
@Component({
  selector: 'app-list-view',
  templateUrl: './list-view.component.html',
  styleUrls: ['./list-view.component.scss']
})
export class ListViewComponent implements OnInit {
  @Input() items: BookingCard;
  public Theme: string; public place:string;
 
  model   = {option: '2'};ji=0;  //payment option selction
  constructor(private router:Router,private activatedRoute:ActivatedRoute ) {
    
   }

  ngOnInit(): void {
    this.Theme = this.activatedRoute.snapshot.paramMap.get('Theme');
    this.place = this.activatedRoute.snapshot.paramMap.get('place');
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

  route(code){
    this.router.navigate(['/Destination/'+ this.Theme +'/'+ this.place +'/DestinationDetail'], { queryParams: { filter: code  } });
  }
}
