import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 's05-odd',
  templateUrl: './odd.component.html',
  styleUrls: ['./odd.component.css']
})
export class S05OddComponent implements OnInit {
  @Input() num:number;
  
  constructor() { }

  ngOnInit() {
  }

}
