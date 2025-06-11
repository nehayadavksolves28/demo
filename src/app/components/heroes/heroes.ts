import { Component, signal } from '@angular/core';
import { Hero } from '../../interface/hero';

@Component({
  selector: 'app-heroes',
  imports: [],
  templateUrl: './heroes.html',
  styleUrl: './heroes.scss'
})
export class Heroes {
    hero:Hero = {
      id: 1,
      name: 'Windstorm'
    };
    
    
}
