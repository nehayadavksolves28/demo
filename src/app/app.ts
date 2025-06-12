import { Component, inject, OnInit } from '@angular/core';
import { Todo } from './services/todo';

@Component({
  selector: 'app-root',
  imports: [],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App implements OnInit{
  
  protected title = 'demo';
  todoService = inject(Todo);
  // constructor(){
  //    console.log(this.todoService.getSquare(10))
  // }

  ngOnInit(): void {
    this.todoService.getTodos().subscribe({
      next:(data)=>{
        console.log(data);
      },
      error:(err)=>{
        console.log(err);
      },
      complete:()=>{
        console.log("completed");
      }
    })
  }
}
