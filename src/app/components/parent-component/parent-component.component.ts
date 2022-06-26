import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-parent-component',
  templateUrl: './parent-component.component.html',
  styleUrls: ['./parent-component.component.css']
})
export class ParentComponentComponent implements OnInit {

  @Input() title!: string
  @Input() complexData!: {email: string, internetProvider: string}

  constructor() { }

  ngOnInit(): void {
  }

}
