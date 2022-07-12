import { Injectable } from '@angular/core';
import{ Animal } from 'src/app/Animal';


@Injectable({
  providedIn: 'root'
})
export class ListrenderserviceService {

  constructor() { }

  remove(animals: Animal[], animal: Animal){
    return animals.filter((a) => animal.name !== a.name)
  }
}
