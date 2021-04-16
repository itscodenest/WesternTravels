import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';

export interface themelink {
  link: string;
  img: string;
  name: string;
}
@Component({
  selector: 'app-themeshowcard',
  templateUrl: './themeshowcard.component.html',
  styleUrls: ['./themeshowcard.component.scss']
})
export class ThemeshowcardComponent implements OnInit {
  @Input() items: themelink[];
  constructor() { }
  @ViewChild('widgetsContent') widgetsContent: ElementRef;
  ngOnInit(): void {
  }
  scrollLeft() {
    this.widgetsContent.nativeElement.scrollLeft -= 800;
  }

  scrollRight() {
    this.widgetsContent.nativeElement.scrollLeft += 800;
  }
}
