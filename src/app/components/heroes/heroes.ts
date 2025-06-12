import { Component, signal } from '@angular/core';
import { Hero } from '../../interface/hero';
import { UpperCasePipe } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HEROES } from '../../mock.heroes';

@Component({
  selector: 'app-heroes',
  imports: [UpperCasePipe,FormsModule],
  templateUrl: './heroes.html',
  styleUrl: './heroes.scss'
})
export class Heroes {
  heroes: Hero[] = HEROES;
    
}
