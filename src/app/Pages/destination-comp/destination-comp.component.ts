import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-destination-comp',
  templateUrl: './destination-comp.component.html',
  styleUrls: ['./destination-comp.component.scss']
})
export class DestinationCompComponent implements OnInit {
  @Input() title: string;
  @Input() subtitle: string;

  constructor() { }

  ngOnInit(): void {
  }

}
