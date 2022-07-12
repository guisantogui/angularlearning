import { Component, OnInit } from '@angular/core';
import { Animal } from 'src/app/Animal';
import { ListrenderserviceService } from 'src/app/services/listrenderservice.service';

@Component({
  selector: 'app-listrender',
  templateUrl: './listrender.component.html',
  styleUrls: ['./listrender.component.css']
})
export class ListrenderComponent implements OnInit {

  animals: Animal[] = [
    { name: "Pepe", type :"Bird", age: 5 },
    { name: "Lady", type :"Dog", age: 12 },
    { name: "Sophia", type :"Cat", age: 10 },
    { name: "Jerry", type :"Rat", age: 1 },
  ]

  animalDetails = '';

  constructor(private listService: ListrenderserviceService) {

  }

  ngOnInit(): void {
  }

  showAge(animal: Animal){
    this.animalDetails = `O pet ${animal.name} tem ${animal.age} anos`
  }

  remove(animal: Animal){
    this.animals =this.listService.remove(this.animals, animal)

  }

}
