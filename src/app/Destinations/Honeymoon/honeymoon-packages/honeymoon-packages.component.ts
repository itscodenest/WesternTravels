import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BookingCard } from '../../../Models/BookingCard.model';
@Component({
  selector: 'app-honeymoon-packages',
  templateUrl: './honeymoon-packages.component.html',
  styleUrls: ['./honeymoon-packages.component.scss']
})
export class HoneymoonPackagesComponent implements OnInit {

  info: BookingCard[]; p: number = 1;collection:BookingCard[];
  public id: string;
  constructor(private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.id = this.activatedRoute.snapshot.paramMap.get('id');
     console.log(this.id);
    this.dataload();
  }
  dataload() {
  }

}
