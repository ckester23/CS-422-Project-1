import { Component, OnInit } from '@angular/core';
import { Frame } from 'src/app/frame';
import { FrameService } from 'src/app/services/frame.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {
  constructor(private frameService: FrameService) {}

  ngOnInit(): void {
  }

}
