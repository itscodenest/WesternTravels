import { Component, Input, OnInit } from '@angular/core';
import { simplecard } from '../../Models/Simplecard.model';

@Component({
  selector: 'app-simplecard',
  templateUrl: './simplecard.component.html',
  styleUrls: ['./simplecard.component.scss']
})
export class SimplecardComponent implements OnInit {
 
  constructor() { }
  @Input() items: simplecard[];
  ngOnInit(): void {
  }

}
