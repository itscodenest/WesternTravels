import { Component, OnInit } from '@angular/core';
import { simplecard } from '../../Models/Simplecard.model';

let cardItems: simplecard[] = [

];
@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.scss']
})
export class LandingPageComponent implements OnInit {
  datasource :simplecard[];
  constructor() { }

  ngOnInit(): void {
    this.filterSelection("Jan")
  }
//filter image based on month
  filterSelection(c:string) {
    if(c =="Jan"){
     cardItems = [
      {
        img: 'https://cdn.pixabay.com/photo/2018/04/06/13/46/poly-3295856_960_720.png',
        title: 'Jan',
      },
      {
        img: 'https://cdn.pixabay.com/photo/2018/04/06/13/46/poly-3295856_960_720.png',
        title: 'Jan',
      },
      {
        img: 'https://cdn.pixabay.com/photo/2018/04/06/13/46/poly-3295856_960_720.png',
        title: 'Jan',
      },
      {
        img: 'https://cdn.pixabay.com/photo/2018/04/06/13/46/poly-3295856_960_720.png',
        title: 'Jan',
      },
     ]
     this.datasource = cardItems;
    }
   else if(c=="Feb"){
    cardItems = [
      {
        img: 'https://cdn.pixabay.com/photo/2018/04/06/13/46/poly-3295856_960_720.png',
        title: 'Feb',
      },
      {
        img: 'https://cdn.pixabay.com/photo/2018/04/06/13/46/poly-3295856_960_720.png',
        title: 'Feb',
      },
      {
        img: 'https://cdn.pixabay.com/photo/2018/04/06/13/46/poly-3295856_960_720.png',
        title: 'Feb',
      },
      {
        img: 'https://cdn.pixabay.com/photo/2018/04/06/13/46/poly-3295856_960_720.png',
        title: 'Feb',
      },
     ]
     this.datasource = cardItems;
    }
  }
  onButtonGroupClick($event){
    let clickedElement = $event.target || $event.srcElement;
    if( clickedElement.nodeName === "BUTTON" ) {
      let isCertainButtonAlreadyActive = clickedElement.parentElement.querySelector(".act");
      // if a Button already has Class: .active
      if( isCertainButtonAlreadyActive ) {
        isCertainButtonAlreadyActive.classList.remove("act");
      }
      clickedElement.className += " act";
    }

  }
  


}
