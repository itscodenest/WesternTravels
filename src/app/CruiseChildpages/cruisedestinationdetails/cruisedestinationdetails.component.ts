import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DayOverview, Itinerary } from '../../ChildPages/showdestination/showdestination.component';
import { simplecard } from '../../Models/Simplecard.model';

let indDest: simplecard[] = [];
@Component({
  selector: 'app-cruisedestinationdetails',
  templateUrl: './cruisedestinationdetails.component.html',
  styleUrls: ['./cruisedestinationdetails.component.scss']
})
export class CruisedestinationdetailsComponent implements OnInit {
  public id: string; model   = {option: '2'};ji=0; items:any;DayOverview:DayOverview[];itirnary:Itinerary[];
  indiandest: simplecard[];
  constructor(private router:Router,private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.id = this.activatedRoute.snapshot.paramMap.get('id');
    //recomded  packeges
    this.topIndLoc()
    // DayOverview
    this.DayOverview=[{
      Day:1,
      Header:"Morning to Noon",
      Description:"Arrive at Male International Airport. Transfer to Hotel / Resort & Check-In. Free Time at Leisure to Relax in your Hotel / Resort"
    },
    {
      Day:2,
      Header:"Morning to Noon",
      Description:"Arrive at Male International Airport. Transfer to Hotel / Resort & Check-In. Free Time at Leisure to Relax in your Hotel / Resort"
    },
    {
      Day:3,
      Header:"Morning to Noon",
      Description:"Arrive at Male International Airport. Transfer to Hotel / Resort & Check-In. Free Time at Leisure to Relax in your Hotel / Resort"
    }]
    //itirnary
    this.itirnary=[
      {
        Day:1,
        place:"Meditarian",
        img1:"https://cdn.pixabay.com/photo/2015/05/15/14/50/concert-768722__340.jpg",
        img2:"https://cdn.pixabay.com/photo/2016/02/26/16/15/las-vegas-1224242__340.jpg",
        Categaries:["Night-Life","Cruies","Nature","HoneyMoon","Holiday"],
        isCab:true,
        isFlight:true,
        isMeal:true,
        ishotel:true,
        hotel:"Mercure Bali Harvestland Kuta",
        HotelDisc:"Trip AdviserSashidara DSwimming pool - outdoorFitness facilitiesRestaurant Bar/loungeMercure Bali Harvestland KutaKuta - Tuban, Jl By Pass Ngurah Rai No 8Near the airport, Mercure Bali Harvestland Kuta is located in Kutas Kuta - Tuban neighborhood and close to Mall Bali Galeria, Honorary Consulate of the Netherlands, and Swiss Consulate",
        Hotelcategary:["Night-Life","Cruies","Nature","HoneyMoon","Holiday"],
        Hotelimage:"https://cdn.pixabay.com/photo/2019/05/28/00/15/indoors-4234071__340.jpg",
        Hotelrating:3,
        discription:" the capital of Maldives. On arrival, you will be met by our representative and transferred to your resort. Check into the resort. The rest of the day is at leisure for you to relax in the serene atmosphere of Maldives. Overnight in Maldives"
      },
      {
        Day:2,
        place:"male",
        Categaries:["Night-Life","Cruies","Nature","HoneyMoon","Holiday"],
        isCab:true,
        isFlight:false,
        isMeal:true,
        ishotel:true,
        hotel:"Mercure Bali Harvestland Kuta",
        HotelDisc:"Trip AdviserSashidara DSwimming pool - outdoorFitness facilitiesRestaurant Bar/loungeMercure Bali Harvestland KutaKuta - Tuban, Jl By Pass Ngurah Rai No 8Near the airport, Mercure Bali Harvestland Kuta is located in Kutas Kuta - Tuban neighborhood and close to Mall Bali Galeria, Honorary Consulate of the Netherlands, and Swiss Consulate",
        Hotelcategary:["Night-Life","Cruies","Nature","HoneyMoon","Holiday"],
        Hotelimage:"https://cdn.pixabay.com/photo/2019/05/28/00/15/indoors-4234071__340.jpg",
        Hotelrating:4,
        discription:" the capital of Maldives. On arrival, you will be met by our representative and transferred to your resort. Check into the resort. The rest of the day is at leisure for you to relax in the serene atmosphere of Maldives. Overnight in Maldives"
      }

    ]
    //place details
this.items =
  {
    Name:"Magical kerala Summer Spetial Honeymoon trip",
    Duration:"3 days 5Nights",
    Offer:22,
    ishotel:true,
    isFlight:true,
    isMeal:true,
    isCab:true,
    rates:[1212,1500,1700,2000],
    strikedrates:[1212,1500,1700,2000],
    link:'',
    categary:["Night-Life","Cruies","Nature","HoneyMoon","Holiday"]
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
       
      },
      {
        img: 'https://cdn.pixabay.com/photo/2015/10/12/15/01/mountain-984083__340.jpg',
        route: "",
        days: "3 days/4 nights",
        place: 'Tamilnaadu',
        offer: '23',
        cost: 2224,
        strikecost: 2335,
       
      },
      {
        img: 'https://cdn.pixabay.com/photo/2014/08/27/18/24/girl-429380__340.jpg',
        route: "",
        days: "2 days/3 nights",
        place: 'Kerala',
        offer: '23',
        cost: 3224,
        strikecost: 3335,
        
      },
      {
        img: 'https://cdn.pixabay.com/photo/2018/01/04/00/19/mountains-3059528__340.jpg',
        route: "",
        days: "4 days/5 nights",
        place: 'Himalaya',
        offer: '23',
        cost: 3224,
        strikecost: 4335,
       
      },
      {
        img: 'https://cdn.pixabay.com/photo/2013/10/09/02/27/sea-192989__340.jpg',
        route: "",
        days: "2 days/3 nights",
        place: 'Mumbai',
        offer: '23',
        cost: 1224,
        strikecost: 1335,
        
      }
    ]
    this.indiandest = indDest;
  }
  redirect(pagename: string) {
    document.querySelector('#' + pagename)
      .scrollIntoView();
  }
}
