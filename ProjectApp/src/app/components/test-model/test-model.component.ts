import { Component, OnInit } from '@angular/core';
import { FormBuilder, ReactiveFormsModule } from '@angular/forms';
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
    databaseName: "Database",
    gitURL: "GitURL",
    score: 0
  }

  testForm = this.formBuilder.group( {
    name:'',
    gitURL: ''
  });

  private modelFile: File | null = null;
  private databaseFile: File | null = null;

  public currentUser: User = this.dummyUser;

  public outputUser: User = this.currentUser;

  constructor( 
    private formBuilder: FormBuilder, 
    private scoreService: ScoresService
  ) { }

  ngOnInit(): void {
  }

  public onSubmit(): void {
    // save user input data

    //might make a formal global object for users
    if (this.testForm.controls['name'].value) {
      this.currentUser.name = this.testForm.controls['name'].value;
      if (this.testForm.controls['gitURL'].value) {
        this.currentUser.gitURL = this.testForm.controls['gitURL'].value;
      }
      // check files
      if (this.databaseFile) {
        console.log("database file is real!");
        this.sendDatabase(this.databaseFile);
      }

      if (this.modelFile) {
        console.log("model file is real!");
        this.currentUser.score = this.getScore();
      }
    }

    this.outputUser = this.currentUser;
    this.scoreService.sendUserObject(this.currentUser);
    this.currentUser = this.dummyUser; // not working! BUG!
    console.log(this.currentUser);
    this.testForm.reset();
  }

  public onClear(): void {
    this.testForm.reset();
    this.currentUser = this.dummyUser;
    this.modelFile = null;
    this.databaseFile = null;
  }

  public modelChange(_event: Event) {
    if (_event.target) {
      const files = (_event.target as HTMLInputElement).files;

      if (files?.item(0)) {
        this.modelFile = files.item(0);
      }
    }
  }

  public databaseChange(_event: Event) {
    if (_event.target) {
      const files = (_event.target as HTMLInputElement).files;

      if (files?.item(0)) {
        this.databaseFile = files.item(0);
      }
    }
  }

  private getScore(): number {
    // send User data to back end, and receive a score

    //currently chooses a random score
    let score = Math.floor(Math.random() * 100);
    return score;
  }

  private sendDatabase(_file: File) {
    // send database file to back
    // database should be added to available databases to compare
    // modelFile to

    console.log("sending database");
  }

}
