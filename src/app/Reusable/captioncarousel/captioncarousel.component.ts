import { Component, Input, OnInit } from '@angular/core';
import { CaptionCarousel } from '../../Models/Captioncarousel';

@Component({
  selector: 'card-captioncarousel',
  templateUrl: './captioncarousel.component.html',
  styleUrls: ['./captioncarousel.component.scss']
})
export class CaptioncarouselComponent implements OnInit {

  constructor() { }
  @Input() items: CaptionCarousel[];
  ngOnInit(): void {
  }

}
