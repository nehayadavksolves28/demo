import { Component, effect, signal } from '@angular/core';
import { Heroes } from "./components/heroes/heroes";
import { NgClass, UpperCasePipe } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  imports: [Heroes,UpperCasePipe,FormsModule, NgClass],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected title = 'Tour of Heros';
  name=signal("neha")
  myEffect = effect(()=>{
    console.log(this.name());
  })
}
