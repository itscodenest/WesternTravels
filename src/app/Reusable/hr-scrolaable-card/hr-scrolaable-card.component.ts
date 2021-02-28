import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { simplecard } from '../../Models/Simplecard.model';

@Component({
  selector: 'xscrolablecard',
  templateUrl: './hr-scrolaable-card.component.html',
  styleUrls: ['./hr-scrolaable-card.component.scss']
})
export class HrScrolaableCardComponent implements OnInit {

  constructor() { }
  @Input() items: simplecard[];@Input() heading:string;
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