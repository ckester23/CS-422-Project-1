import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ScoresService {

  private userData!: Subject<Object>;
  public user: Observable<Object> = this.userData.asObservable();

  public firstPlace!: Object;
  public secondPlace!: Object;
  public thirdPlace!: Object;
  public fourthPlace!: Object;
  public fifthPlace!: Object;

  constructor() { }

  public sendUser(_user: Object) {
    this.userData.next(_user);
  }
}
