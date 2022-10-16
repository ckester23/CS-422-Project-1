import { Component, OnInit } from '@angular/core';
import { Frame } from 'src/app/Frame';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {
  title: string = 'Dux D-Zine Time Series Database'
  about: string = 'check out all the cool time series below!'

  frame: Frame = {
    name: "super cool fake time series"
  }

  constructor() { }

  ngOnInit(): void {
  }

}
