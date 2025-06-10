import { Component, signal } from '@angular/core';
import { Counter } from './components/counter/counter';

@Component({
  selector: 'app-root',
  imports: [Counter],
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App {
  appCounter = signal(0);
  steps = signal(0);

  setSteps(stepCount:number){
     this.steps.set(stepCount);
  }

  increment() {
    if (this.appCounter() < 10) this.appCounter.update((x) => x + 1);
  }

  decrement() {
    if (this.appCounter() > 0) this.appCounter.update((x) => x - 1);
  }
}
