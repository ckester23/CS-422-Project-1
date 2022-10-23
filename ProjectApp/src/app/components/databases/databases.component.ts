import { Component, OnInit } from '@angular/core';
import { Frame } from 'src/app/frame';
import { mockFrames } from 'src/app/mock-frames';

@Component({
  selector: 'app-databases',
  templateUrl: './databases.component.html',
  styleUrls: ['./databases.component.css']
})
export class DatabasesComponent implements OnInit {

  title: string = 'Dux D-Zine Time Series Database'
  about: string = 'check out all the cool time series below!'

  // dummy ts
  tsFrames: Frame[] = mockFrames;

  constructor() {}

  ngOnInit(): void {
  }

}
