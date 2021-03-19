import { Component, OnInit } from '@angular/core';
import { BookingCard } from '../../../Models/BookingCard.model';


@Component({
  selector: 'app-kerala-honeymoon',
  templateUrl: './kerala-honeymoon.component.html',
  styleUrls: ['./kerala-honeymoon.component.scss']
})
export class KeralaHoneymoonComponent implements OnInit {
  info: BookingCard[]; p: number = 1;collection:BookingCard[];
  constructor() { }

  ngOnInit(): void {
    this.dataload();
  }
  dataload() {
    this.info = [
      {
        Name:"Magical kerala Summer spetialHoney moontrip",
        Duration:"3 days 5Nights",
        Offer:22,
        ishotel:false,
        isFlight:true,
        isMeal:true,
        isCab:true,
        isTwostarHotel:true,
        isThreestarHotel:true,
        isFourstarHotel:true,
        isFivestarHotel:true,
        rates:[1212,1500,1700,2000],
        strikedrates:[1212,1500,1700,2000],
        link:''
      },
      {
        Name:"Magical kerala Summer spetialHoney moontrip",
        Duration:"2 days 3Nights",
        Offer:22,
        ishotel:true,
        isFlight:true,
        isMeal:true,
        isCab:true,
        isTwostarHotel:true,
        isThreestarHotel:true,
        isFourstarHotel:true,
        isFivestarHotel:true,
        rates:[1212,1500,1700,2000],
        strikedrates:[1200,1550,1770,2300],
        link:''
      },
      {
        Name:"Magical kerala Summer spetialHoney moontrip",
        Duration:"2 days 3Nights",
        Offer:22,
        ishotel:true,
        isFlight:true,
        isMeal:true,
        isCab:true,
        isTwostarHotel:true,
        isThreestarHotel:true,
        isFourstarHotel:true,
        isFivestarHotel:true,
        rates:[1212,1500,1700,2000],
        strikedrates:[1200,1550,1770,2300],
        link:''
      },
      {
        Name:"Magical kerala Summer spetialHoney moontrip",
        Duration:"2 days 3Nights",
        Offer:22,
        ishotel:true,
        isFlight:true,
        isMeal:true,
        isCab:true,
        isTwostarHotel:true,
        isThreestarHotel:true,
        isFourstarHotel:true,
        isFivestarHotel:true,
        rates:[1212,1500,1700,2000],
        strikedrates:[1200,1550,1770,2300],
        link:''
      },
      {
        Name:"Magical kerala Summer spetialHoney moontrip",
        Duration:"2 days 3Nights",
        Offer:22,
        ishotel:true,
        isFlight:true,
        isMeal:true,
        isCab:true,
        isTwostarHotel:true,
        isThreestarHotel:true,
        isFourstarHotel:true,
        isFivestarHotel:true,
        rates:[1212,1500,1700,2000],
        strikedrates:[1200,1550,1770,2300],
        link:''
      },
      {
        Name:"Magical kerala Summer spetialHoney moontrip",
        Duration:"2 days 3Nights",
        Offer:22,
        ishotel:true,
        isFlight:true,
        isMeal:true,
        isCab:true,
        isTwostarHotel:true,
        isThreestarHotel:true,
        isFourstarHotel:true,
        isFivestarHotel:true,
        rates:[1212,1500,1700,2000],
        strikedrates:[1200,1550,1770,2300],
        link:''
      },
      {
        Name:"Magical kerala Summer spetialHoney moontrip",
        Duration:"2 days 3Nights",
        Offer:22,
        ishotel:true,
        isFlight:true,
        isMeal:true,
        isCab:true,
        isTwostarHotel:true,
        isThreestarHotel:true,
        isFourstarHotel:true,
        isFivestarHotel:true,
        rates:[1212,1500,1700,2000],
        strikedrates:[1200,1550,1770,2300],
        link:''
      },
      {
        Name:"Magical kerala Summer spetialHoney moontrip",
        Duration:"2 days 3Nights",
        Offer:22,
        ishotel:true,
        isFlight:true,
        isMeal:true,
        isCab:true,
        isTwostarHotel:true,
        isThreestarHotel:true,
        isFourstarHotel:true,
        isFivestarHotel:true,
        rates:[1212,1500,1700,2000],
        strikedrates:[1200,1550,1770,2300],
        link:''
      },
      {
        Name:"Magical kerala Summer spetialHoney moontrip",
        Duration:"2 days 3Nights",
        Offer:22,
        ishotel:true,
        isFlight:true,
        isMeal:true,
        isCab:true,
        isTwostarHotel:true,
        isThreestarHotel:true,
        isFourstarHotel:true,
        isFivestarHotel:true,
        rates:[1212,1500,1700,2000],
        strikedrates:[1200,1550,1770,2300],
        link:''
      },
      {
        Name:"Magical kerala Summer spetialHoney moontrip",
        Duration:"2 days 3Nights",
        Offer:22,
        ishotel:true,
        isFlight:true,
        isMeal:true,
        isCab:true,
        isTwostarHotel:true,
        isThreestarHotel:true,
        isFourstarHotel:true,
        isFivestarHotel:true,
        rates:[1212,1500,1700,2000],
        strikedrates:[1200,1550,1770,2300],
        link:''
      },
      {
        Name:"Magical kerala Summer spetialHoney moontrip",
        Duration:"2 days 3Nights",
        Offer:22,
        ishotel:true,
        isFlight:true,
        isMeal:true,
        isCab:true,
        isTwostarHotel:true,
        isThreestarHotel:true,
        isFourstarHotel:true,
        isFivestarHotel:true,
        rates:[1212,1500,1700,2000],
        strikedrates:[1200,1550,1770,2300],
        link:''
      },
      {
        Name:"Magical kerala Summer spetialHoney moontrip",
        Duration:"2 days 3Nights",
        Offer:22,
        ishotel:true,
        isFlight:true,
        isMeal:true,
        isCab:true,
        isTwostarHotel:true,
        isThreestarHotel:true,
        isFourstarHotel:true,
        isFivestarHotel:true,
        rates:[1212,1500,1700,2000],
        strikedrates:[1200,1550,1770,2300],
        link:''
      },
     
    ]
    
  }
  
}
 
