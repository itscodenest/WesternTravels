import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery'
import { simplecard } from '../../Models/Simplecard.model';
@Component({
  selector: 'app-mytripdisc',
  templateUrl: './mytripdisc.component.html',
  styleUrls: ['./mytripdisc.component.scss']
})
export class MytripdiscComponent implements OnInit {
  datasource: simplecard[]
 
  constructor() { }

  ngOnInit(): void {

    this.datasource=[
      {
        img: 'https://cdn.pixabay.com/photo/2017/03/27/14/49/beach-2179183__340.jpg',
        title: 'Bali',
        disc:'jbdhdghdvhdvvdgvxh  dhgydghghg hgdh gdvbdv'
      },
      {
        img: 'https://cdn.pixabay.com/photo/2017/12/15/13/51/polynesia-3021072__340.jpg',
        title: 'Poliasia',
        disc:'jbdhdghdvhdvvdgvxh  dhgydghghg hgdh gdvbdv'
      },
      {
        img: 'https://cdn.pixabay.com/photo/2017/01/28/02/24/japan-2014618__340.jpg',
        title: 'Japan',
        disc:'jbdhdghdvhdvvdgvxh  dhgydghghg hgdh gdvbdv'
      },
      {
        img: 'https://cdn.pixabay.com/photo/2015/10/12/15/01/mountain-984083__340.jpg',
        title: 'Jan',
        disc:'jbdhdghdvhdvvdgvxh  dhgydghghg hgdh gdvbdv'
      },

    ]
   
  }
 
  
  
}
