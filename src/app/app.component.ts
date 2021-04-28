import { Component, ElementRef, HostListener, ViewChild } from '@angular/core';
import * as AOS from 'aos';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'WestTrav';elementPosition: any;
 
 
  @HostListener('window:scroll', ['$event'])
  ngOnInit() {
   
    AOS.init();
   
 }
 ngAfterViewInit(){
  
}
 
}
