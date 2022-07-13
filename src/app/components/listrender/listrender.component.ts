import { Component, OnInit } from '@angular/core';
import { Animal } from 'src/app/Animal';
import { ListrenderserviceService } from 'src/app/services/listrenderservice.service';

@Component({
  selector: 'app-listrender',
  templateUrl: './listrender.component.html',
  styleUrls: ['./listrender.component.css']
})
export class ListrenderComponent implements OnInit {

  animals: Animal[] = []

  animalDetails = '';

  constructor(private listService: ListrenderserviceService) {
    this.getAnimals();
  }

  ngOnInit(): void {
  }

  showAge(animal: Animal){
    this.animalDetails = `O pet ${animal.name} tem ${animal.age} anos`
  }

  remove(animal: Animal){
    this.animals =this.listService.remove(this.animals, animal)
  }

  getAnimals() :void{
    this.listService.getAnimals().subscribe( (animals) => {
      this.animals = animals;
    })
  }

}
