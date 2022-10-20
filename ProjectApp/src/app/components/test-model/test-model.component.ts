import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ScoresService } from 'src/app/services/scores.service';
import { User } from 'src/app/user';

@Component({
  selector: 'app-test-model',
  templateUrl: './test-model.component.html',
  styleUrls: ['./test-model.component.css']
})
export class TestModelComponent implements OnInit {

  private dummyUser: User = {
    name: "Dummy",
    gitURL: "GitURL",
    score: 0
  }

  testForm = this.formBuilder.group( {
    name:'',
    gitURL: ''
  });

  public currentUser: User = this.dummyUser;

  public currentScore!: number;

  constructor( 
    private formBuilder: FormBuilder, 
    private scoreService: ScoresService
  ) { }

  ngOnInit(): void {
  }

  public onSubmit(): void {
    // save user input data

    //might make a formal global object for users
    if (this.testForm.controls['name'].value){
      if (this.testForm.controls['gitURL'].value){
        this.currentUser = {
          name: this.testForm.controls['name'].value,
          gitURL: this.testForm.controls['gitURL'].value,
          score: this.sendDataToBack()
        }
      }
    }
    
    this.currentScore = this.currentUser.score;

    this.scoreService.sendUserObject(this.currentUser);
    
  }

  public onClear(): void {
    this.testForm.reset();
  }

  private sendDataToBack(): number {
    // send User data to back end, and receive a score

    //currently chooses a random score
    let score = Math.floor(Math.random() * 100);
    return score;
  }

}