import { Component, OnInit } from '@angular/core';
import { Frame } from 'src/app/frame';
import { FrameService } from 'src/app/services/frame.service';

@Component({
  selector: 'app-databases',
  templateUrl: './databases.component.html',
  styleUrls: ['./databases.component.css']
})
export class DatabasesComponent implements OnInit {

  title: string = 'DATSR Time Series Database'
  about: string = 'Check out all of the Amazing time series below!'

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
