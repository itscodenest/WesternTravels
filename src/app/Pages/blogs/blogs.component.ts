import { Component, ElementRef, OnInit } from '@angular/core';
import { BlogCard } from '../../Models/BlogCard.model';

@Component({
  selector: 'app-blogs',
  templateUrl: './blogs.component.html',
  styleUrls: ['./blogs.component.scss']
})
export class BlogsComponent implements OnInit {
  Blogdetails: BlogCard[];
  constructor(private elementRef: ElementRef) { }

  ngOnInit(): void {
   
    //BlogData
    this.BlogData();
  }
 
 
  BlogData() {
    this.Blogdetails = [
      {
        img: "https://cdn.pixabay.com/photo/2019/10/10/22/15/norway-4540662_960_720.jpg",
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
        img: "https://cdn.pixabay.com/photo/2018/04/27/08/56/water-3354063_960_720.jpg",
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
        img: "https://cdn.pixabay.com/photo/2019/06/28/00/17/umbrella-4303278_960_720.jpg",
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
        img: "https://cdn.pixabay.com/photo/2019/10/09/20/18/etretat-4538160_960_720.jpg",
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
  }

}
