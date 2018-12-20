import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 's05-game-control',
  templateUrl: './game-control.component.html',
  styleUrls: ['./game-control.component.css']
})
export class S05GameControlComponent implements OnInit {
  timer;
  counter:number = 0;
  @Output() oddNumber = new EventEmitter<{value:number}>();
  @Output() evenNumber = new EventEmitter<{value:number}>();

  constructor() { }

  ngOnInit() {
  }

  onStartGame() {
    if (this.timer) this.onStopGame();

    this.timer = setInterval(this.updateCounter, 1000, this);
  }

  onStopGame() {
    clearInterval(this.timer);
  }

  updateCounter(ref:S05GameControlComponent) {
    ref.counter++;
    
    if (ref.counter % 2 == 0) 
      ref.evenNumber.emit({value:ref.counter});
    else
      ref.oddNumber.emit({value:ref.counter});
  }
}
