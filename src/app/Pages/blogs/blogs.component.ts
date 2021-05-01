import { Component, ElementRef, OnInit } from '@angular/core';
import { BlogCard } from '../../Models/BlogCard.model';

@Component({
  selector: 'app-blogs',
  templateUrl: './blogs.component.html',
  styleUrls: ['./blogs.component.scss']
})
export class BlogsComponent implements OnInit {
  Blogdetails: BlogCard[];splitdata:BlogCard[];
  loadble:number= 0; loadeddata ;
  constructor(private elementRef: ElementRef) { }

  ngOnInit(): void {
   
    //BlogData
    this.BlogData();
    this.Load();
  }
 
 
  BlogData() {
    this.Blogdetails = [
      {
        img: "https://image.freepik.com/free-photo/girl-jumping-with-excitement-doorway-with-sea_181624-20834.jpg",
        date: "12 mar 2020",
        bookmark:0,
        Like:0,
        comment: 5,
        author: "Chandan",
        title: "Refresh Escap to hill",
        text:"Loecg epsun its a sample data for checking purpose",
        Readmore: ""
      },
      {
        img: "https://image.freepik.com/free-photo/beautiful-tropical-beach-sea_74190-6772.jpg",
        date: "31 Aug 2020",
        bookmark:0,
        Like:0,
        comment: 5,
        author: "Chandan",
        title: "Refresh Escap to hill",
        text:"Loecg epsun its a sample data for checking purpose",
        Readmore: ""
      },
      {
        img: "https://image.freepik.com/free-photo/perfect-tan-slim-sexy-woman-tropical-beach-young-blonde-woman-have-fun-enjoying-her-summer-vacation_273443-682.jpg",
        date: "31 Aug 2020",
        bookmark:0,
        Like:0,
        comment: 5,
        author: "Chandan",
        title: "Refresh Escap to hill",
        text:"Loecg epsun its a sample data for checking purpose",
        Readmore: ""
      },
      {
        img: "https://cdn.pixabay.com/photo/2018/07/10/10/40/travel-3528324_960_720.jpg",
        date: "31 Aug 2020",
        bookmark:0,
        Like:0,
        comment: 5,
        author: "Chandan",
        title: "Refresh Escap to hill",
        text:"Loecg epsun its a sample data for checking purpose",
        Readmore: ""
      },
       {
        img: "https://image.freepik.com/free-photo/full-shot-smiley-woman-skiing-outdoors_23-2148939147.jpg",
        date: "31 Aug 2020",
        bookmark:0,
        Like:0,
        comment: 5,
        author: "Chandan",
        title: "Refresh Escap to hill",
        text:"Loecg epsun its a sample data for checking purpose",
        Readmore: ""
      },
      {
        img: "https://image.freepik.com/free-photo/girl-jumping-with-excitement-doorway-with-sea_181624-20834.jpg",
        date: "12 mar 2020",
        bookmark:0,
        Like:0,
        comment: 5,
        author: "Chandan",
        title: "Refresh Escap to hill",
        text:"Loecg epsun its a sample data for checking purpose",
        Readmore: ""
      },
      {
        img: "https://image.freepik.com/free-photo/beautiful-tropical-beach-sea_74190-6772.jpg",
        date: "31 Aug 2020",
        bookmark:0,
        Like:0,
        comment: 5,
        author: "Chandan",
        title: "Refresh Escap to hill",
        text:"Loecg epsun its a sample data for checking purpose",
        Readmore: ""
      },
      {
        img: "https://image.freepik.com/free-photo/perfect-tan-slim-sexy-woman-tropical-beach-young-blonde-woman-have-fun-enjoying-her-summer-vacation_273443-682.jpg",
        date: "31 Aug 2020",
        bookmark:0,
        Like:0,
        comment: 5,
        author: "Chandan",
        title: "Refresh Escap to hill",
        text:"Loecg epsun its a sample data for checking purpose",
        Readmore: ""
      },
      {
        img: "https://cdn.pixabay.com/photo/2018/07/10/10/40/travel-3528324_960_720.jpg",
        date: "31 Aug 2020",
        bookmark:0,
        Like:0,
        comment: 5,
        author: "Chandan",
        title: "Refresh Escap to hill",
        text:"Loecg epsun its a sample data for checking purpose",
        Readmore: ""
      },
       {
        img: "https://image.freepik.com/free-photo/full-shot-smiley-woman-skiing-outdoors_23-2148939147.jpg",
        date: "31 Aug 2020",
        bookmark:0,
        Like:0,
        comment: 5,
        author: "Chandan",
        title: "Refresh Escap to hill",
        text:"Loecg epsun its a sample data for checking purpose",
        Readmore: ""
      }
      
    ]
    this.loadeddata  = this.Blogdetails.length;
  }

  Load(){
   
    if(this.loadble <= this.loadeddata){
      this.loadble =  this.loadble + 4;
      this.splitdata = Object.assign(this.Blogdetails.copyWithin(0,this.loadble))
    }
   
    
  }
}
