import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { User } from '../user';
// Contributors: Cheyanne Kester
@Injectable({
  providedIn: 'root'
})

export class ScoresService {

  private dummyUser: User = {
    name: "Dummy",
    databaseName: "Database",
    collectionName: "Collection",
    gitURL: "https://www.google.com/",
    score: 0
  };

  private userData = new Subject<User>();
  public user: Observable<User> = this.userData.asObservable();

  // these will be changed to whatever the backend is holding

  public firstPlaceUser: User = this.dummyUser;
  public secondPlaceUser: User = this.dummyUser;
  public thirdPlaceUser: User = this.dummyUser;
  public fourthPlaceUser: User = this.dummyUser;
  public fifthPlaceUser: User = this.dummyUser;

  // temporary
  public allUsers: Array<User> = [
    this.dummyUser,
    this.dummyUser,
    this.dummyUser,
    this.dummyUser,
    this.dummyUser,
    this.dummyUser,
    this.dummyUser,
    this.dummyUser,
    this.dummyUser,
    this.dummyUser,
    this.dummyUser,
    this.dummyUser
  ];


  constructor() { }

  public sendUserObject(_user: User) {
    // takes in a new user, returns the new dropped user (?)
    let droppedUser = this.setPlace(_user);
    this.addDroppedUser(droppedUser);

    if (_user.score != 0) {
      this.userData.next(_user);
    }
  }

  private addDroppedUser(_dropped: User) {

    if (_dropped != this.dummyUser) {
      if (_dropped.score != 0) {
        this.allUsers.push(_dropped);
      }
    }
  }

  private requestAllUsers() {
    // request list of all users from the back-end as a const

    // call setPlace on the const to set up heirarchy

    // do this.allUsers = the const(user list from backend)

    // call sendUser or something to tell high scores to update
    // maybe call highscores.switchLeaderBoard??
  }

  private setPlace(_user: User) : User {
    // sets all new high score users
    // returns the dropped user

    let newPlace = this.checkPlace(_user.score);
    console.log("score: ", _user.score, newPlace);

    if (newPlace >= 1 ) {
      let dropped = this.fifthPlaceUser;

      switch (newPlace) {
        case (5) :
          this.fifthPlaceUser = _user;
          return dropped;
        
        case (4) :
          this.fifthPlaceUser = this.fourthPlaceUser;
          this.fourthPlaceUser = _user;
          return dropped;
        
        case (3) :
          this.fifthPlaceUser = this.fourthPlaceUser;
          this.fourthPlaceUser = this.thirdPlaceUser;
          this.thirdPlaceUser = _user;
          return dropped;

        case (2) :
          this.fifthPlaceUser = this.fourthPlaceUser;
          this.fourthPlaceUser = this.thirdPlaceUser;
          this.thirdPlaceUser = this.secondPlaceUser;
          this.secondPlaceUser = _user;
          return dropped;

        case (1) :
          this.fifthPlaceUser = this.fourthPlaceUser;
          this.fourthPlaceUser = this.thirdPlaceUser;
          this.thirdPlaceUser = this.secondPlaceUser;
          this.secondPlaceUser = this.firstPlaceUser;
          this.firstPlaceUser = _user;
          return dropped;
        
        default :
          console.warn("User should be on board, but wasn't put there");
          return _user;
      }
    }
    else {
      return _user;
    }
  }

  private checkPlace(_score: number) : number{ 
    // return place that the score should have, if at all
    if (_score == 0) {
      return 0;
    }
    // check if even makes scoreboard
    if (_score >= this.fifthPlaceUser.score) {
      switch(true) {
        case (_score >= this.firstPlaceUser.score) :
          return 1;
        
        case (_score >= this.secondPlaceUser.score) :
          return 2;

        case (_score >= this.thirdPlaceUser.score) :
          return 3;

        case (_score >= this.fourthPlaceUser.score) :
          return 4;

        case (_score >= this.fifthPlaceUser.score) :
          return 5;

        default :
          console.warn("Score Should be on Board, but no place was found");
          return 0;
      }
    }
    else {
      return 0;
    }
  }

}
