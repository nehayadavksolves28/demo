import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ITodo } from '../interface/ITodo';

@Injectable({
  providedIn: 'root'
})
export class Todo {
  url="https://jsonplaceholder.typicode.com/todos";
  
  constructor(private http:HttpClient) { }
  
  getTodos(){
    return this.http.get<ITodo[]>(this.url);
  }

  getSquare(n:number):number{
   return n*n;
  }
}
