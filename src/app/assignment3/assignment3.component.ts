import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-assignment3',
  templateUrl: './assignment3.component.html',
  styleUrls: ['./assignment3.component.css']
})
export class Assignment3Component implements OnInit {
  displaySecret= true;
  buttonClicks = 0;
  buttonClicksArray= [0];

  constructor() { }

  ngOnInit() {
  }

  toggleDisplaySecret(){
    this.displaySecret = !this.displaySecret;
    this.buttonClicks ++;
    console.log(this.buttonClicks);
    this.buttonClicksArray.push(this.buttonClicks);
    console.log(this.buttonClicksArray);
    
  }

}
