import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { simplecard } from '../../Models/Simplecard.model';
import { themelink } from '../../Reusable/themeshowcard/themeshowcard.component';


let indDest: simplecard[] = [];
@Component({
  selector: 'app-theme-holiday',
  templateUrl: './theme-holiday.component.html',
  styleUrls: ['./theme-holiday.component.scss']
})
export class ThemeHolidayComponent implements OnInit {
  indiandest: simplecard[]; themelinks: themelink[];
  constructor() { }
  @ViewChild('widgetsContent') widgetsContent: ElementRef;
  ngOnInit(): void {
    this.topIndLoc();
    this.alltheme()
  }
  scrollLeft() {
    this.widgetsContent.nativeElement.scrollLeft -= 800;
  }

  scrollRight() {
    this.widgetsContent.nativeElement.scrollLeft += 800;
  }
  alltheme() {
    this.themelinks = [
      {
        link: "",
        img: "https://cdn.pixabay.com/photo/2018/04/29/11/35/wood-3359711_960_720.jpg",
        name: "Adventure"
      },
      {
        link: "",
        img: "https://cdn.pixabay.com/photo/2017/05/09/03/48/beautiful-2297215_960_720.jpg",
        name: "Family"
      },
      {
        link: "",
        img: "https://cdn.pixabay.com/photo/2013/07/25/01/33/boat-166738_960_720.jpg",
        name: "Beach"
      },
      {
        link: "",
        img: "https://cdn.pixabay.com/photo/2017/03/31/13/32/couple-2191390_960_720.jpg",
        name: "Honeymoon"
      },
      {
        link: "",
        img: "https://cdn.pixabay.com/photo/2017/09/28/16/19/gothic-2796043_960_720.jpg",
        name: "Historical"
      },
      {
        link: "",
        img: "https://cdn.pixabay.com/photo/2020/12/09/04/01/iceland-5816353_960_720.jpg",
        name: "Nature"
      },
      {
        link: "",
        img: "https://cdn.pixabay.com/photo/2019/10/15/13/33/red-deer-4551678_960_720.jpg",
        name: "Wild life"
      },
      {
        link: "",
        img: "https://cdn.pixabay.com/photo/2016/02/27/18/34/east-1226038_960_720.jpg",
        name: "Frieds"
      }  ,
      {
        link: "",
        img: "https://cdn.pixabay.com/photo/2017/08/02/01/58/people-2569742_960_720.jpg",
        name: "seasonal"
      }  ,
      {
        link: "",
        img: "https://cdn.pixabay.com/photo/2017/02/02/09/58/theravada-buddhism-2032364_960_720.jpg",
        name: "Religius"
      }  
    ]
  }
  topIndLoc() {
    this.indiandest = [
      {
        img: 'https://cdn.pixabay.com/photo/2015/10/30/20/13/sunrise-1014712__340.jpg',
        route: "",
        days: "2 days/3 nights",
        place: 'Karnataka',
        offer: '23',
        cost: 1224,
        strikecost: 1335,
        map: ''
      },
      {
        img: 'https://cdn.pixabay.com/photo/2015/10/12/15/01/mountain-984083__340.jpg',
        route: "",
        days: "3 days/4 nights",
        place: 'Tamilnaadu',
        offer: '23',
        cost: 2224,
        strikecost: 2335,
        map: ''
      },
      {
        img: 'https://cdn.pixabay.com/photo/2014/08/27/18/24/girl-429380__340.jpg',
        route: "",
        days: "2 days/3 nights",
        place: 'Kerala',
        offer: '23',
        cost: 3224,
        strikecost: 3335,
        map: ''
      },
      {
        img: 'https://cdn.pixabay.com/photo/2018/01/04/00/19/mountains-3059528__340.jpg',
        route: "",
        days: "4 days/5 nights",
        place: 'Himalaya',
        offer: '23',
        cost: 3224,
        strikecost: 4335,
        map: ''
      },
      {
        img: 'https://cdn.pixabay.com/photo/2013/10/09/02/27/sea-192989__340.jpg',
        route: "",
        days: "2 days/3 nights",
        place: 'Mumbai',
        offer: '23',
        cost: 1224,
        strikecost: 1335,
        map: ''
      }
    ]

  }
}
