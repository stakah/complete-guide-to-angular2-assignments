import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 's05-even',
  templateUrl: './even.component.html',
  styleUrls: ['./even.component.css']
})
export class S05EvenComponent implements OnInit {
  @Input() num:number;

  constructor() { }

  ngOnInit() {
  }

}
