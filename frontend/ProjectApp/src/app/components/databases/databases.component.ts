import { Component, OnInit } from '@angular/core';

import { ActivatedRoute } from '@angular/router';
import { Frame } from 'src/app/frames/frame';
import { FrameService } from 'src/app/services/frame.service';

@Component({
  selector: 'app-databases',
  templateUrl: './databases.component.html',
  styleUrls: ['./databases.component.css']
})
export class DatabasesComponent implements OnInit {

  title: string = 'DATSR Time Series Database'
  about: string = 'Check out all of the Amazing time series below!'

  tsFrames: Frame[] = []

  constructor(private route: ActivatedRoute, private frameService: FrameService) {}

  ngOnInit(): void {
    this.getFrames();
  }

  getFrames(): void {
    this.frameService.getFrames().subscribe(tsFrames => this.tsFrames = tsFrames)
  }
}
