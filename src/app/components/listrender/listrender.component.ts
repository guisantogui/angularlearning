import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listrender',
  templateUrl: './listrender.component.html',
  styleUrls: ['./listrender.component.css']
})
export class ListrenderComponent implements OnInit {

  animals = [
    { name: "Pepe", type :"Bird" },
    { name: "Lady", type :"Dog" },
    { name: "Sophia", type :"Cat" },
    { name: "Jerry", type :"Rat" },
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
