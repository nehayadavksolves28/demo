import { Component, signal } from '@angular/core';
import { Student } from './interfaces/Student';
import { NgClass } from '@angular/common';

@Component({
  selector: 'app-root',
  imports: [NgClass],
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App {
  students = signal<Student[]>([
  {
    id: 1,
    name: 'Aman Yadav',
    marks: 89,
    city: 'Indore',
  },
  {
    id: 2,
    name: 'Neha Sharma',
    marks: 70,
    city: 'Delhi',
  },
  {
    id: 3,
    name: 'Ravi Kumar',
    marks: 20,
    city: 'Mumbai',
  },
  {
    id: 4,
    name: 'Priya Mehta',
    marks: 29,
    city: 'Pune',
  },
  {
    id: 5,
    name: 'Ankit Singh',
    marks: 67,
    city: 'Lucknow',
  },
  {
    id: 6,
    name: 'Sneha Jain',
    marks: 55,
    city: 'Jaipur',
  },
  {
    id: 7,
    name: 'Rahul Verma',
    marks: 40,
    city: 'Chandigarh',
  },
  {
    id: 8,
    name: 'Divya Thakur',
    marks: 95,
    city: 'Bhopal',
  },
  {
    id: 9,
    name: 'Mohit Sinha',
    marks: 72,
    city: 'Nagpur',
  },
  {
    id: 10,
    name: 'Kajal Patel',
    marks: 10,
    city: 'Ahmedabad',
  },


  ]);
}
