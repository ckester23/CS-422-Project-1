import { Component, OnInit } from '@angular/core';
import { ScoresService } from 'src/app/services/scores.service';
import { User } from 'src/app/user';

@Component({
  selector: 'app-high-scores',
  templateUrl: './high-scores.component.html',
  styleUrls: ['./high-scores.component.css']
})
export class HighScoresComponent implements OnInit {

  private dummyUser: User = {
    name: "Dummy",
    gitURL: "GitURL",
    score: 0
  };

  public firstPlaceUser: User = this.scoreService.firstPlaceUser;
  public secondPlaceUser: User = this.scoreService.secondPlaceUser;
  public thirdPlaceUser: User = this.scoreService.thirdPlaceUser;
  public fourthPlaceUser: User = this.scoreService.fourthPlaceUser;
  public fifthPlaceUser: User = this.scoreService.fifthPlaceUser;

  public allUsers: Array<User> = this.scoreService.allUsers;

  constructor(private scoreService: ScoresService) { }

  ngOnInit(): void {
    this.scoreService.user.subscribe((_user: User) => {
      this.firstPlaceUser = this.scoreService.firstPlaceUser;
      this.secondPlaceUser = this.scoreService.secondPlaceUser;
      this.thirdPlaceUser = this.scoreService.thirdPlaceUser;
      this.fourthPlaceUser = this.scoreService.fourthPlaceUser;
      this.fifthPlaceUser = this.scoreService.fifthPlaceUser;    

      this.allUsers = this.scoreService.allUsers;
      
    });
  };



}
