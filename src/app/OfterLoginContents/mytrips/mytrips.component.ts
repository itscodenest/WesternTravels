
import { Component, OnInit } from '@angular/core';

export interface myTripinfo {
  Trip: string;
  Date: string;
  Days: number;
  Cost: number;
}
@Component({
  selector: 'app-mytrips',
  templateUrl: './mytrips.component.html',
  styleUrls: ['./mytrips.component.scss']
})
export class MytripsComponent implements OnInit {
  Upcoming:boolean;cancelled :boolean;Complited:boolean;
  Upcomingtrips: myTripinfo;
  constructor() { }

  ngOnInit(): void {
    this.Upcoming=false;this.cancelled=true;this.Complited=true;
    //dummy info
    this.Upcomingtrips = {
      Trip: "Kerala",
      Date: "22 Nov 1996",
      Days: 5,
      Cost: 17235
    }
  }

}
