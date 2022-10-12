import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';

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

  public currentUser!: Object;

  public userString!: String;

  constructor( private formBuilder: FormBuilder) { }

  ngOnInit(): void {
  }

  public onSubmit() {
    // save user input data

    //might make a formal global object for users
    this.currentUser = {
      name: (this.testForm.controls['name'].value), 
      answer: (this.testForm.controls['answer'].value),
      gitURL: (this.testForm.controls['gitURL'].value)
    };
    
    this.userString = (this.testForm.controls['name'].value) + ' ' +
    (this.testForm.controls['answer'].value) + ' ' +
    (this.testForm.controls['gitURL'].value);
    
    console.warn('You clicked submit', this.currentUser);

    this.testForm.reset;
  }

}
