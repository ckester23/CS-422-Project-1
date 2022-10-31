import { Component, OnInit } from '@angular/core';

import { ActivatedRoute } from '@angular/router';
import { FrameService } from 'src/app/services/frame.service';

// Contributors: Cheyanne Kester, Scott Wallace
@Component({
  selector: 'app-databases',
  templateUrl: './databases.component.html',
  styleUrls: ['./databases.component.css']
})

// Contributors: Scott Wallace
export class DatabasesComponent implements OnInit {

  title: string = 'DATSR Time Series Database'
  about: string = 'Check out all of the Amazing time series below!'

  // variable for database
  db: any 

  constructor(private route: ActivatedRoute, private frameService: FrameService) {}

  ngOnInit(): void {
    this.getFrames();
  }

  // gets database from mongo through flask
  getFrames(): void {
    this.frameService.getFrames().subscribe(db => this.db = db)
    this.frameService.getFrames().subscribe(db => console.log(db))
  } 

  // does not currently work
  // supposed to download a csv file
  onClick(colName: string, fileName: string) {
    this.frameService.getFrame(colName, fileName)
  }
}
