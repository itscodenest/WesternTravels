export interface BookingCard {
  img:string;
    Name:string;
    Duration:String;
    Offer:number;
    ishotel:boolean;
    isFlight:boolean;
    isMeal:boolean;
    isCab:boolean;
    isTwostarHotel:boolean;
    isThreestarHotel:boolean;
    isFourstarHotel:boolean;
    isFivestarHotel:boolean;
    rates:number[];
    strikedrates:number[];
    link?:string;
    Categaries?:string[];
  }