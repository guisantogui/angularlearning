import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Animal } from 'src/app/Animal';
import { ListrenderserviceService } from 'src/app/services/listrenderservice.service';

@Component({
  selector: 'app-item-details',
  templateUrl: './item-details.component.html',
  styleUrls: ['./item-details.component.css']
})
export class ItemDetailsComponent implements OnInit {

  animal?: Animal

  constructor(private listService: ListrenderserviceService, private route: ActivatedRoute) {
    this.getAnimal();
  }

  ngOnInit(): void {
  }

  getAnimal(){
    const id = Number(this.route.snapshot.paramMap.get("id"));
    this.listService.getItem(id).subscribe(animal => {
      this.animal = animal;
    })
  }

}
