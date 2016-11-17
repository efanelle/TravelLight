import { Component, OnInit } from '@angular/core';
import { D3VisComponent } from './d3-vis.component'

@Component({
  selector: 'app-car-card',
  template: `
    <div class = 'outer'>
      <div class='tab'>
        <img class='bigcar' src='../assets/car.jpeg'/>
        <p>CAR</p>
        <img class='smcar' src='../assets/carIcon.png'/>
      </div>
      <app-d3-vis transportMode="car">
      </app-d3-vis>
      <app-car-stats></app-car-stats>
  `,
  styles: [`    
   .outer {
      min-height: 70vh;
      width: 40vw;
      // background-color:lightblue;
      border: solid 1px black;
      border-radius: 10px;
      float:left;
      margin-left:7%;
    }
    p{
      margin-right: 6%;
      text-align:right;
      font-size:.5em;
      margin-bottom:0;
    }
    .smcar {
      height: 5%;
      width: 5%;
      margin-right: 5%;
      float: right;
    }
    .tab {
      float: right;
      width: 100%;
    }
      .bigcar {
      height: 100px;
      width:100%;
      clear:both;
      border-radius:10px;
    }
  `]
})
export class CarCardComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
