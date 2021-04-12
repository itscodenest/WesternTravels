import { Component, OnInit } from '@angular/core';
import { simplecard } from '../../Models/Simplecard.model';
import { ImgCarousel } from '../../Models/Imgcarousel.model';
import { CaptionCarousel } from '../../Models/Captioncarousel';
import * as AOS from 'aos';
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
    AOS.init();
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
        icon: "https://image.freepik.com/free-vector/explorer-with-backpack_23-2148151583.jpg",
        name: "Adventure"
      },
      {
        icon: "https://image.freepik.com/free-vector/portrait-four-member-happy-family-posing-together-parents-with-kids_283146-78.jpg",
        name: "Family"
      },
      {
        icon: "https://image.freepik.com/free-vector/couple-enjoying-holidays-beach_1150-39561.jpg",
        name: "Beach"
      },
      {
        icon: "https://image.freepik.com/free-vector/just-married-couple-beach_24877-58842.jpg",
        name: "Honeymoon"
      },
      {
        icon: "https://image.freepik.com/free-vector/beilstein-germany-watercolor-sketch-hand-drawn_293360-195.jpg",
        name: "Historical"
      },
      {
        icon: "https://image.freepik.com/free-vector/environmental-concept-paper-style_23-2148416312.jpg",
        name: "Nature"
      },
      {
        icon: "https://image.freepik.com/free-vector/african-tribe-with-group-wild-african-animal-white-background_1308-54001.jpg",
        name: "Wild Life"
      },
      {
        icon: "https://image.freepik.com/free-vector/personal-memories-concept_23-2148403720.jpg",
        name: "Friends"
      },
      {
        icon: "https://image.freepik.com/free-vector/happy-woman-walking-rainy-day-with-umbrella-isolated-flat-vector-illustration-cartoon-female-character-being-outdoors-autumn-rain-landscape-weather-concept_74855-10087.jpg",
        name: "Seasonal"
      },
      {
        icon: "https://image.freepik.com/free-vector/happy-people-celebrating-songkran-festival-by-playing-water-with-elephants-illustration_138260-712.jpg",
        name: "Religious"
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
