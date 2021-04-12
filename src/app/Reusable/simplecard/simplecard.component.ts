import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { simplecard } from '../../Models/Simplecard.model';

@Component({
  selector: 'app-simplecard',
  templateUrl: './simplecard.component.html',
  styleUrls: ['./simplecard.component.scss']
})
export class SimplecardComponent implements OnInit {
 
  constructor() { }
  @Input() items: simplecard[];
  @ViewChild('widgetsContent') widgetsContent: ElementRef;
  ngOnInit(): void {
  }
  scrollLeft(){
    this.widgetsContent.nativeElement.scrollLeft -= 800;
  }
  
  scrollRight(){
    this.widgetsContent.nativeElement.scrollLeft += 800;
  }
}
