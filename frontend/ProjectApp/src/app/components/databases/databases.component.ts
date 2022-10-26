import { Component, OnInit } from '@angular/core';
import { Frame } from 'src/app/frames/frame';
import { mockFrames } from 'src/app/frames/mock-frames';

@Component({
  selector: 'app-databases',
  templateUrl: './databases.component.html',
  styleUrls: ['./databases.component.css']
})
export class DatabasesComponent implements OnInit {

  title: string = 'DATSR Time Series Database'
  about: string = 'Check out all of the Amazing time series below!'

  // dummy ts
  tsFrames: Frame[] = mockFrames;

  constructor() {}

  ngOnInit(): void {
  }

}
