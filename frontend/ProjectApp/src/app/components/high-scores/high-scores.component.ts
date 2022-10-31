import { Component, OnInit } from '@angular/core';
import { ScoresService } from 'src/app/services/scores.service';
import { User } from 'src/app/user';
// Contributors: Cheyanne Kester
@Component({
  selector: 'app-high-scores',
  templateUrl: './high-scores.component.html',
  styleUrls: ['./high-scores.component.css']
})
export class HighScoresComponent implements OnInit {

  public currentDatabaseBoard: String = "DatabaseName";

  public firstPlaceUser: User = this.scoreService.firstPlaceUser;
  public secondPlaceUser: User = this.scoreService.secondPlaceUser;
  public thirdPlaceUser: User = this.scoreService.thirdPlaceUser;
  public fourthPlaceUser: User = this.scoreService.fourthPlaceUser;
  public fifthPlaceUser: User = this.scoreService.fifthPlaceUser;

  public allUsers: Array<User> = this.scoreService.allUsers;

  public databaseNames: Array<String> = [
    "randomName",
    "dummyName",
    "databaseName",
    "ILoveTS",
    "TSRules",
    "Dux_DZineIsAwesome",
    "randomName",
    "dummyName",
    "databaseName",
    "ILoveTS",
    "TSRules",
    "randomName",
    "dummyName",
    "databaseName",
    "ILoveTS",
    "TSRules",
    "randomName",
    "dummyName",
    "databaseName",
    "ILoveTS",
    "TSRules"

  ]

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

  public getDatabaseNames() {
    // retrieve databse names to list for the database selection area

    // currently, I'll just make a random list

  }

  public selectDatabase(_databaseName: String) {
    console.log("Selected new database");
    this.currentDatabaseBoard = _databaseName;

    this.switchScoreBoard();
  }
  private switchScoreBoard() {
    // switch the leaderboard AND allusers

  }

 }
