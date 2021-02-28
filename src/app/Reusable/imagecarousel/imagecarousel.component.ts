
import { Component, OnInit,Input } from '@angular/core';
import { ImgCarousel } from '../../Models/Imgcarousel.model';
@Component({
  selector: 'card-imagecarousel',
  templateUrl: './imagecarousel.component.html',
  styleUrls: ['./imagecarousel.component.scss']
})
export class ImagecarouselComponent implements OnInit {

  constructor() { }
  @Input() items: ImgCarousel[];
  ngOnInit(): void { 
   
  }

}
