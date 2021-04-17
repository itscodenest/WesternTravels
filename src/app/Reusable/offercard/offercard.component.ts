import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';

export interface offercard{

}
@Component({
  selector: 'app-offercard',
  templateUrl: './offercard.component.html',
  styleUrls: ['./offercard.component.scss']
})
export class OffercardComponent implements OnInit {

  constructor() { }
  @Input() items: offercard[];@Input() heading:string;
  @Input() Viewall:string;
  @ViewChild('widgetsContent') widgetsContent: ElementRef;
  ngOnInit(): void {
  }
  scrollLeft(){
    this.widgetsContent.nativeElement.scrollLeft -= 1225;
  }
  
  scrollRight(){
    this.widgetsContent.nativeElement.scrollLeft += 1225;
  }
}
