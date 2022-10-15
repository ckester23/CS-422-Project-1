import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {
  title: string = 'DDZ TS Database B)'
  about: string = 'here is our about section'

  constructor() { }

  ngOnInit(): void {
  }

}
