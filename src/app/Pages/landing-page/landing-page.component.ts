import { Component, OnInit } from '@angular/core';
import { simplecard } from '../../Models/Simplecard.model';
import { ImgCarousel } from '../../Models/Imgcarousel.model';
import { CaptionCarousel } from '../../Models/Captioncarousel';

export interface icongroup {
  icon: string;
  name: string;
}

let cardItems: simplecard[] = [];
let carouselimg: ImgCarousel[] = [];
let carouselcaption: CaptionCarousel[] = [];
let indDest: simplecard[] = [];

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.scss']
})
export class LandingPageComponent implements OnInit {
  datasource: simplecard[]; caroimg: ImgCarousel[]; carocaption: CaptionCarousel[];
  indiandest: simplecard[]; holidaytheme: icongroup[];
  constructor() { }

  ngOnInit(): void {
    //month based  filter
    this.MonthfilterSelection("Jan")
    //image carousel
    this.imageCaro();
    //caption carousel
    this.captionCaro();
    //indian top location
    this.topIndLoc();
    //theme 
    this.holtheme();
  }


  imageCaro() {
    carouselimg = [
      {
        img1: "https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(34).jpg",
        img2: "https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(18).jpg",
        img3: "https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(35).jpg"
      },
      {
        img1: "https://mdbootstrap.com/img/Photos/Horizontal/City/4-col/img%20(60).jpg",
        img2: "https://mdbootstrap.com/img/Photos/Horizontal/City/4-col/img%20(47).jpg",
        img3: "https://mdbootstrap.com/img/Photos/Horizontal/City/4-col/img%20(48).jpg"
      },
      {
        img1: "https://mdbootstrap.com/img/Photos/Horizontal/Food/4-col/img%20(51).jpg",
        img2: "https://mdbootstrap.com/img/Photos/Horizontal/Food/4-col/img%20(53).jpg",
        img3: "https://mdbootstrap.com/img/Photos/Horizontal/Food/4-col/img%20(45).jpg"
      },

    ]
    this.caroimg = carouselimg;
  }
  captionCaro() {
    carouselcaption = [
      {
        heading1: 'ADVENTURE',
        discription1: '"Run towards adventure and not away from it!"',
        icon1: 'fas fa-map',
        heading2: 'FAMILY',
        discription2: '"Travelling in the company of those we love is home in motion."',
        icon2: 'fas fa-users',
        heading3: 'BEACH',
        discription3: '"Let the waves hit your feet, and the sand be your seat."',
        icon3: 'class="fa fa-ship"'
      },
      {
        heading1: 'FAMILY',
        discription1: '"Travelling in the company of those we love is home in motion."',
        icon1: 'fas fa-users',
        heading3: 'BEACH',
        discription3: '"Let the waves hit your feet, and the sand be your seat."',
        icon3: 'class="fa fa-ship"',
        heading2: 'ADVENTURE',
        discription2: '"Run towards adventure and not away from it!"',
        icon2: 'fas fa-map'
      }


    ]
    this.carocaption = carouselcaption;
  }
  MonthfilterSelection(c: string) {
    if (c == "Jan") {
      cardItems = [
        {
          img: 'https://cdn.pixabay.com/photo/2017/03/27/14/49/beach-2179183__340.jpg',
          title: 'Bali',
        },
        {
          img: 'https://cdn.pixabay.com/photo/2017/12/15/13/51/polynesia-3021072__340.jpg',
          title: 'Poliasia',
        },
        {
          img: 'https://cdn.pixabay.com/photo/2017/01/28/02/24/japan-2014618__340.jpg',
          title: 'Japan',
        },
        {
          img: 'https://cdn.pixabay.com/photo/2015/10/12/15/01/mountain-984083__340.jpg',
          title: 'Jan',
        },

      ]
      this.datasource = cardItems;
    }
    else if (c == "Feb") {
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
  topIndLoc() {
    indDest = [
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
    this.indiandest = indDest;
  }
  holtheme() {
    this.holidaytheme = [
      {
        icon: "/assets/skins/adventure_ek2.png",
        name: "Adventure"
      },
      {
        icon: "/assets/skins/family_2.png",
        name: "Family"
      },
      {
        icon: "/assets/skins/beach_ek2.png",
        name: "Beach"
      },
      {
        icon: "/assets/skins/honeymoon.png",
        name: "Honeymoon"
      },
      {
        icon: "/assets/skins/historical.png",
        name: "Historical"
      },
      {
        icon: "/assets/skins/nature.png",
        name: "Nature"
      },
      {
        icon: "/assets/skins/wild_life.png",
        name: "Wild Life"
      },
      {
        icon: "/assets/skins/friends.png",
        name: "Friends"
      },
      {
        icon: "/assets/skins/seasonal_packages.png",
        name: "Seasonal"
      }
    ]
  }


  // month filter button group 
  onButtonGroupClick($event) {
    let clickedElement = $event.target || $event.srcElement;
    if (clickedElement.nodeName === "BUTTON") {
      let isCertainButtonAlreadyActive = clickedElement.parentElement.querySelector(".act");
      // if a Button already has Class: .active
      if (isCertainButtonAlreadyActive) {
        isCertainButtonAlreadyActive.classList.remove("act");
      }
      clickedElement.className += " act";
    }

  }





}
