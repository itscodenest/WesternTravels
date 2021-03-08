import { Component, ElementRef, HostListener, ViewChild } from '@angular/core';
import * as AOS from 'aos';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'WestTrav';elementPosition: any;
  
  @ViewChild('Scrollnavbar') menuElementRef: ElementRef;menuElement:HTMLElement;
  @HostListener('window:scroll', ['$event'])
  ngOnInit() {
    this.menuElement = this.menuElementRef.nativeElement
    AOS.init();
 }
 ngAfterViewInit(){
  this.elementPosition = this.menuElement.offsetTop;
}
  onScroll(event) {
    const windowScroll = window.pageYOffset;
    if(windowScroll >= this.elementPosition){
      this.menuElement.style.top = "0px";
    } else {
      this.menuElement.style.top = "-50px";
    }
  }
}
