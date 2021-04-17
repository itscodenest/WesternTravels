import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
export interface testimonialdata{

}
@Component({
  selector: 'app-testimonials',
  templateUrl: './testimonials.component.html',
  styleUrls: ['./testimonials.component.scss']
})
export class TestimonialsComponent implements OnInit {

  constructor() { }
  @Input() items: testimonialdata[];@Input() heading:string;
  @Input() Viewall:string;
  @ViewChild('widgetsContent') widgetsContent: ElementRef;
  ngOnInit(): void {
  }
  scrollLeft(){
    this.widgetsContent.nativeElement.scrollLeft -= 300;
  }
  
  scrollRight(){
    this.widgetsContent.nativeElement.scrollLeft += 300;
  }
}
