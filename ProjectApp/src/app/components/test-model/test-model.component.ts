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

  testForm = this.formBuilder.group( {
    name:'',
    answer: '',
    gitURL: ''
  });

  public currentUser!: User;

  public userString!: String;

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
      if (this.testForm.controls['answer'].value){
        if (this.testForm.controls['gitURL'].value){
          this.currentUser = {
            name: this.testForm.controls['name'].value,
            answer: this.testForm.controls['answer'].value,
            gitURL: this.testForm.controls['gitURL'].value,
            score: this.sendDataToBack()
          }
        }
      }
    }
    
    this.currentScore = this.currentUser.score;

    this.scoreService.sendUserObject(this.currentUser);

    console.warn('You clicked submit', this.currentUser);
    
  }

  public onClear(): void {
    this.testForm.reset();
  }

  private sendDataToBack(): number {
    // send User data to back end, and receive a score
    return 100;
  }

}
