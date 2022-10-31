import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ScoresService } from 'src/app/services/scores.service';
import { User } from 'src/app/user';


// Contributors: Cheyanne Kester

@Component({
  selector: 'app-test-model',
  templateUrl: './test-model.component.html',
  styleUrls: ['./test-model.component.css']
})
export class TestModelComponent implements OnInit {

  private readonly dummyUser: User = {
    name: "Dummy",
    databaseName: "Database",
    collectionName: "Collection",
    gitURL: "GitURL",
    score: 0
  };

  modelForm = this.formBuilder.group( {
    name:'',
    gitURL: '',
    collectionName: '',
    databaseName: ''
  });

  dataForm = this.formBuilder.group( {
    databaseName: '',
    newCollection: false
  });

  private modelFile: File | null = null;
  private databaseFile: File | null = null;

  private currentUser: User = {
    name: this.dummyUser.name,
    databaseName: this.dummyUser.databaseName,
    collectionName: this.dummyUser.collectionName,
    gitURL: this.dummyUser.gitURL,
    score: this.dummyUser.score
  };

  public newCollectionBool: Boolean = false;

  public outputString: String = 'No Data Entered';
  public scoreString: String = 'No Score';

  constructor( 
    private formBuilder: FormBuilder, 
    private scoreService: ScoresService
  ) { }

  ngOnInit(): void {
  }

  public onModelSubmit(): void {
    // when user submits their model
   
    // check that they entered a valid name
    if (this.modelForm.controls['name'].value && this.modelForm.controls['name'].value != '') {
      console.log(this.modelForm.controls['name'].value);
      this.currentUser.name = this.modelForm.controls['name'].value;

      // if they entered a URL (optional)
      if (this.modelForm.controls['gitURL'].value) {
        this.currentUser.gitURL = this.modelForm.controls['gitURL'].value;
      }
      // user must provide a collection name
      if (this.modelForm.controls['collectionName'].value) {
        this.currentUser.collectionName = this.modelForm.controls['collectionName'].value;
      
        // user must provice a data(set) name
        if(this.modelForm.controls['databaseName'].value) {
          this.currentUser.databaseName = this.modelForm.controls['databaseName'].value;
          
          // check that file exists
          if (this.modelFile) {
            this.currentUser.score = this.getScore(this.modelFile);
          }
        }
      }
    }
    // housekeeping for UI output
    this.setOutputStrings(this.currentUser);

    // send user data (will probably remove on backend connection)
    this.scoreService.sendUserObject(this.currentUser);

    // reset the form and currentUser
    this.modelForm.reset();
    this.resetCurrentUser();
  }

  public onDataSubmit(): void {
    // when user submits a dataset

    // verify that the name of the dataset is valid
    if (this.dataForm.controls['databaseName'].value && this.modelForm.controls['databaseName'].value != '') {

      // check that the file provided is valid
      if (this.databaseFile) {
        // send information
        this.sendDataset(this.databaseFile, this.newCollectionBool);
      }
    }
    // housekeeping
    console.log(this.newCollectionBool);
    this.onDataClear();
  }

  public onModelClear(): void {
    // when user selects clear on Model section
    this.modelForm.reset();
    this.resetCurrentUser();
    this.modelFile = null;
  }

  public onDataClear(): void {
     // when user selects clear on Data section
    this.dataForm.reset();
    this.databaseFile = null;
    this.newCollectionBool = false;
  }

  public modelChange(_event: Event): void  {
    // when the Model File input section changes
    if (_event.target) {
      const files = (_event.target as HTMLInputElement).files;

      if (files?.item(0)) {
        this.modelFile = files.item(0);
      }
    }
  }

  public databaseChange(_event: Event): void  {
    // when the Dataset File input section changes
    if (_event.target) {
      const files = (_event.target as HTMLInputElement).files;

      if (files?.item(0)) {
        this.databaseFile = files.item(0);
      }
    }
  }

  public setBoolean() {
    // when the user clicks on the checkbox
    this.newCollectionBool = !this.newCollectionBool;
  }

  private resetCurrentUser(): void  {
    // manually reset currentUser to dummyUser
    this.currentUser = {
      name: this.dummyUser.name,
      databaseName: this.dummyUser.databaseName,
      collectionName: this.dummyUser.collectionName,
      gitURL: this.dummyUser.gitURL,
      score: this.dummyUser.score
    };
  }

  private setOutputStrings(_user: User): void  {
    // get nice ouput for User's name, gitURL, and Score
    let outString = '';
    let scoreStr = '';
    
    if (_user.name != this.dummyUser.name) {
      outString = _user.name + " : " + _user.gitURL;
      scoreStr = _user.score.toFixed(0);
    } else {
      outString = 'No Data Entered';
      scoreStr = 'No Score';
    }
    this.outputString = outString;
    this.scoreString = scoreStr;
  }

  private getScore(_file: File): number {
    // send model, collection, and dataset names to back, get a score
    console.log("Sending model, getting score");

    //currently chooses a random score
    let score = Math.floor(Math.random() * 100);
    return score;
  }

  private sendDataset(_file: File, _newColl: Boolean): void  {
    // send dataset file and name to back
    // if _newColl == false update existng collection
    // if _newColl == true create new collection by the name of 
      // the given dataset name
    console.log("sending database");
  }

}
