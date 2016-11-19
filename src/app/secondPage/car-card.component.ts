import { Component, Input, OnChanges } from '@angular/core';
import { RadarChartComponent } from './radar-chart.component';

@Component({
  selector: 'app-car-card',
  template: `
    <div class = 'outer' (mouseover)='over()' (mouseout)='out()'>
      <div [class]="hide">
        <app-car-stats 
        [costData]="costData">
        </app-car-stats>
      </div>
    </div>
  `,
      //   <p>Ranking: {{ ranking }}</p>
      // <p>CAR</p>
      // <app-radar-chart 
      // [costData]="costData"
      // transportMode="car">
      // </app-radar-chart>
  styles: [`    
   .outer {
     width:100%;
     height:200px;
      border: solid 1px black;
      border-radius: 10px;
      float:left;
      background: url('./assets/drive.jpeg') no-repeat center center;
      -webkit-background-size: cover;
      -moz-background-size: cover;
      -o-background-size: cover;
      background-size: cover;
      color:whitesmoke;
    }
    .outer:hover{
      box-shadow: 0 0 20px rgba(0, 0, 0, 0.4);
    }
    p{
      display: inline;
      margin-right: 6%;
      text-align:right;
      font-size:1.2em;
      margin-bottom:0;
    }
    .smcar {
      height: 5%;
      width: 5%;
      margin-right: 5%;
      float: right;
    }
    // .tab {
    //   float: right;
    //   width: 100%;
    // }
    .bigcar {
      height: 20%;
      width:100%;
      clear:both;
      border-radius:10px;
    }
    .hidden {
      display: none;
    }
    .show {
      height:100%;
      width:100%;
    }
  `]
})
export class CarCardComponent implements OnChanges {

  constructor() { }
  hide: string = "hidden";

  over() {
    this.hide = "show";
  }
  out() {
    this.hide = "hidden";
  }
  @Input() costData: any;
  ranking: number = 0;
  ngOnChanges() {
    // TODO: Ivey factor this out into it's own function
    if (this.costData) {
      let averageData: any[] = this.costData.normalizedData
      let index: number = 0;
      for (var i = 0; i < averageData.length; i++) {
        if (averageData[i].label === 'car') {
          index = i;
          break;
        }
      }
      let scores = averageData.map(methodData => 
        methodData.data.reduce((a, b) => a + b))
      let rankings = scores.map(score => {
        let rank = 1;
        scores.forEach(compScore => {
          if (compScore < score) rank++;
        })
        return rank;
      })
      this.ranking = rankings[index]
    }
  }

}
