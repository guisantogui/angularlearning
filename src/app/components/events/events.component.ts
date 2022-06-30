import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.css']
})
export class EventsComponent implements OnInit {

  mustShow = false;

  constructor() { }

  ngOnInit(): void {
  }


  showMessage(): void {
    this.mustShow = !this.mustShow
  }
}
