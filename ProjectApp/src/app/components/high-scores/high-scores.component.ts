import { Component, OnInit } from '@angular/core';
import { ScoresService } from 'src/app/services/scores.service';
import { User } from 'src/app/User';

@Component({
  selector: 'app-high-scores',
  templateUrl: './high-scores.component.html',
  styleUrls: ['./high-scores.component.css']
})
export class HighScoresComponent implements OnInit {

  public firstPlaceUser: User = this.scoreService.firstPlaceUser;
  public secondPlaceUser!: Object;
  public thirdPlaceUser!: Object;
  public fourthPlaceUser!: Object;
  public fifthPlaceUser!: Object;

  public firstScore = this.scoreService.firstPlace;


  constructor(private scoreService: ScoresService) { }

  ngOnInit(): void {
    this.scoreService.user.subscribe((_user: User) => {
      console.warn("New User", _user);
      //this.determineRank(_user); Object
      this.firstPlaceUser = _user;
      this.firstScore = this.scoreService.firstPlace;
      this.firstPlaceUser = this.scoreService.firstPlaceUser;

    })
  }

}
