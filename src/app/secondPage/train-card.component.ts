import { Component, Input, OnChanges, AfterViewInit } from '@angular/core';
import { RadarChartComponent } from './radar-chart.component';

@Component({
  selector: 'app-train-card',
  template: `
    <div class = 'outer' (mouseover)='over()' (mouseout)='out()'>
    <div [class]="hide">
      <div class='tab'>
      </div>
        <app-train-stats
        [costData]="costData">
        </app-train-stats>
      </div>
      <div [class]="show">
        <h3> Travel by Train</h3>
      </div>
    </div>
  `,
  styles: [`    
   .outer {
      width:100%;
      height:200px;
      border: solid 1px black;
      border-radius: 10px;
      float:left;
      background: url('./assets/bigtrain.jpeg') no-repeat center center;
      -webkit-background-size: cover;
      -moz-background-size: cover;
      -o-background-size: cover;
      background-size: cover;
      color:whitesmoke;
      position: relative;
    }
    .outer:hover{
      box-shadow: 0 0 20px rgba(0, 0, 0, 0.4);
    }
    p{
      display: inline;
      margin-right: 5%;
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
    .tab {
      float: right;
      width: 100%;
    }
      .bigcar {
      height: 20%;
      width:100%;
      clear:both;
      border-radius:10px;
    }
    .hidden {
      display: none;
      position: absolute;
    }
    .show {
      height:100%;
      width:100%;
      position: absolute;
      text-align:center;
    }
  `]
})
export class TrainCardComponent implements OnChanges {

  constructor() { }
  hide: string = "hidden";
  show: string = "show";

  over() {
    this.hide = "show";
    this.show = "hidden"
  }
  out() {
    this.hide = "hidden";
    this.show = "show";
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
