import { Component, input, output, signal } from '@angular/core';

@Component({
  selector: 'app-counter',
  imports: [],
  templateUrl: './counter.html',
  styleUrl: './counter.scss'
})
export class Counter {
    count=input(0);
    stepsEvent = output<number>();
    genrateStepsCount(){
      const steps= Math.trunc(Math.random()*10000);
      this.stepsEvent.emit(steps);
    }
}
