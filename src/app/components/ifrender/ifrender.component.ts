import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ifrender',
  templateUrl: './ifrender.component.html',
  styleUrls: ['./ifrender.component.css']
})
export class IfrenderComponent implements OnInit {

  canShow = true
  name = "Batman"

  constructor() { }

  ngOnInit(): void {
  }

}
