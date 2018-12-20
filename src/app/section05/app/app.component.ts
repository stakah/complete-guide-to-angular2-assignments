import { Component, OnInit } from '@angular/core';

@Component({
  selector: 's05-app-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class S05AppComponent implements OnInit {
  numbers:number[] = [];

  constructor() { }

  ngOnInit() {
  }

  onOddNumber(counterData: {value:number}) {
    this.numbers.push(counterData.value);
  }

  onEvenNumber(counterData: {value:number}) {
    this.numbers.push(counterData.value);
  }
}
