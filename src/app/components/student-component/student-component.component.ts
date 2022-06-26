import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-student-component',
  templateUrl: './student-component.component.html',
  styleUrls: ['./student-component.component.css']
})
export class StudentComponentComponent implements OnInit {

  name: string = "Gui"
  age: number = 30
  hobbies = ["get rich", 0, true]
  car = {
    model: "Fox",
    color: "red"
  }

  constructor() { }

  ngOnInit(): void {
  }

}
