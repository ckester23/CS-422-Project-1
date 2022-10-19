import { Component, OnInit } from '@angular/core';
import { Frame } from 'src/app/frame';
import { FrameService } from 'src/app/services/frame.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {
  title: string = 'Dux D-Zine Time Series Database'
  about: string = 'check out all the cool time series below!'

  frames: Frame[] = [];
  selectedFrame?: Frame;

  getFrames(): void {
    this.frameService.getFrames().subscribe(frames => this.frames = frames);
  }

  onSelect(frame: Frame): void {
    this.selectedFrame = frame;
  }

  constructor(private frameService: FrameService) {}

  ngOnInit(): void {
    this.getFrames();
  }

}
