import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { User } from '../components/test-model/test-model.component';

@Injectable({
  providedIn: 'root'
})

export class ScoresService {

  private dummyUser: User = {
    name: "Dummy",
    answer: "Answer",
    gitURL: "GitURL",
    score: 0
  }

  private userData = new Subject<User>();
  public user: Observable<User> = this.userData.asObservable();

  public firstPlace: number = 0;
  public secondPlace: number = 0;
  public thirdPlace: number = 0;
  public fourthPlace: number = 0;
  public fifthPlace: number = 0;

  public firstPlaceUser: User = this.dummyUser;
  constructor() {}

  public sendUserObject(_user: User) {
    this.firstPlace = _user.score;
    console.warn("service first place", this.firstPlace);

    this.userData.next(_user);
  }

  public checkPlace(_score: number) { 
    // need to do big work here, cannot do it in component
  }

}
