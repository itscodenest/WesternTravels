import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { BookingCard } from '../../Models/BookingCard.model';


@Component({
  selector: 'app-destination-comp',
  templateUrl: './destination-comp.component.html',
  styleUrls: ['./destination-comp.component.scss']
})
export class DestinationCompComponent implements OnInit {
  selecteddays: any = [];selectedRange:any = [];selectedtheme:any = [];
  searchText;sortOption: string ='product_name|asc';
  @Input() title: string;
  @Input() subtitle: string;
  
  info: BookingCard[]; p: number = 1;collection:BookingCard[];
  public Theme: string; public place:string;
 public innerWidth:any;
  constructor(private activatedRoute: ActivatedRoute,private router:Router) { }

  ngOnInit(): void {
    this.Theme = this.activatedRoute.snapshot.paramMap.get('Theme');
    this.place = this.activatedRoute.snapshot.paramMap.get('place');
    //alert( this.Theme +"   "+this.place)
    this.innerWidth = window.innerWidth;
    if(this.innerWidth > 768 && this.innerWidth < 1024)
    {
      alert("Please use the Landscap mode")
    }
    this.dataload();
  }
  form: FormGroup = new FormGroup({
    selecteddays: new FormControl([]),
    selectedRange: new FormControl([]),
    selectedtheme:new FormControl([]),
    selectedInclusions:new FormControl([]),
    selectedMonth:new FormControl([])
  });
  dataload() {
    if(this.Theme == "General")
    {
    this.info = [
      {
        img:"",
        Name:"Charismatic Kerala family Holiday Package",
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
        rates:[122,1500,1700,2000],
        Categaries:["NightLife","Cruies","Nature","HoneyMoon","Holiday","Budget","Theme"],
        strikedrates:[1212,1500,1700,2000],
        link:''
      },
      {
        img:"",
        Name:"Visit Kerala and see Astounding Places",
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
        Categaries:["NightLife","Cruies","Nature","HoneyMoon","Holiday"],
        rates:[1312,1500,1700,2000],
        strikedrates:[1200,1550,1770,2300],
        link:''
      },
      {
        img:"",
        Name:"Karnataka",
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
        Categaries:["NightLife","Cruies","Nature","HoneyMoon","Holiday"],
        rates:[1112,1500,1700,2000],
        strikedrates:[1200,1550,1770,2300],
        link:''
      },
      {
        img:"",
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
        Categaries:["NightLife","Cruies","Nature","HoneyMoon","Holiday"],
        rates:[1412,1500,1700,2000],
        strikedrates:[1200,1550,1770,2300],
        link:''
      },
      {
        img:"",
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
        Categaries:["NightLife","Cruies","Nature","HoneyMoon","Holiday"],
        rates:[1612,1500,1700,2000],
        strikedrates:[1200,1550,1770,2300],
        link:''
      }, {
        img:"",
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
        Categaries:["NightLife","Cruies","Nature","HoneyMoon","Holiday"],
        rates:[212,1500,1700,2000],
        strikedrates:[1200,1550,1770,2300],
        link:''
      }
     
    ]
  }
  else{
    this.info = [
      {
        img:"",
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
        Categaries:["NightLife","Cruies","Nature","HoneyMoon","Holiday"],
        rates:[1212,1500,1700,2000],
        strikedrates:[1200,1550,1770,2300],
        link:''
      },
      {
        img:"",
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
        Categaries:["NightLife","Cruies","Nature","HoneyMoon","Holiday"],
        rates:[1212,1500,1700,2000],
        strikedrates:[1200,1550,1770,2300],
        link:''
      },
      {
        img:"",
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
        img:"",
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
        img:"",
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

  sort(event: any) {
    switch (event.target.value) {
      case "Low":
        {
          this.info = this.info.sort((low, high) => low.rates[0] - high.rates[0]);
          break;
        }

      case "High":
        {
          this.info = this.info.sort((low, high) => high.rates[0] - low.rates[0]);
          break;
        }

      case "Name":
        {
          this.info = this.info.sort(function (low, high) {
            if (low.Name < high.Name) {
              return -1;
            }
            else if (low.Name > high.Name) {
              return 1;
            }
            else {
              return 0;
            }
          })
          break;
        }

      default: {
        this.info = this.info.sort((low, high) => low.rates[0] - high.rates[0]);
        break;
      }

    }
    return this.info;

  }
  filter(){
     
    //const queryParams:Params ={ filter : value }
    //this.router.navigate(['/Destination/'+ this.Theme +'/'+ this.place], { queryParams: { filter: value ,place:'dhhdv' } });
    //this.router.navigate([],{relativeTo:this.activatedRoute,queryParams:queryParams,queryParamsHandling:'merge'})
    //this.router.navigate(['.'],{relativeTo:this.activatedRoute,queryParams:queryParams})
  }
}


