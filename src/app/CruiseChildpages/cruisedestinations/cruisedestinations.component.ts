import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BookingCard } from '../../Models/BookingCard.model';

@Component({
  selector: 'app-cruisedestinations',
  templateUrl: './cruisedestinations.component.html',
  styleUrls: ['./cruisedestinations.component.scss']
})
export class CruisedestinationsComponent implements OnInit {
  public id: string; info: BookingCard[];p: number = 1;
  constructor(private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.id = this.activatedRoute.snapshot.paramMap.get('id');
    this.dataload();
  }
  dataload() {
    if(this.id == "kerala")
    {
    this.info = [
      {
        img:"",
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
        img:"",
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
        img:"",
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
        img:"",
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
        img:"",
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
     
    ]
  }
  else{
    this.info = [
      {
        img:"",
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
        img:"",
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
        img:"",
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
        img:"",
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
        img:"",
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
     
    ]
  }
    
  }
}
