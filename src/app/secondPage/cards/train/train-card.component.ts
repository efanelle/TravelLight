import { Component, Input, OnChanges, AfterViewInit } from '@angular/core';
// import { RadarChartComponent } from '../../radar-chart.component';

@Component({
  selector: 'app-train-card',
  template: `
    
      <div *ngIf="method==='transit'">
        <div class = 'outer'>
        <i class="ionicons ion-ribbon-b {{ place }}"></i>
        <div *ngIf="cost"> 
            <i class="glyphicon glyphicon-usd"></i>
          </div>
          <div *ngIf="time">
            <i class="glyphicon glyphicon-time"></i>
          </div>
        <br />
          <div [class]="stats">
              <h3> Travel by Public Transit</h3>
              <app-train-stats
              [costData]="costData">
              </app-train-stats>
          </div>
        </div>
      </div>

      <div *ngIf="method ==='train'">
        <div class = 'outer'>
        <i class="ionicons ion-ribbon-b {{ place }}"></i>
        <div *ngIf="cost"> 
            <i class="glyphicon glyphicon-usd"></i>
          </div>
          <div *ngIf="time">
            <i class="glyphicon glyphicon-time"></i>
          </div>
        <br />
          <div [class]="stats">
              <h3> Travel by Train or Bus</h3>
              <app-train-stats
              [costData]="costData">
              </app-train-stats>
          </div>
        </div>
      </div>

    
  `,
  styleUrls: ['./train-card.component.css']
})
export class TrainCardComponent implements OnChanges {

  constructor() { }

  @Input() costData: any;
  ranking: number = 0;
  method: string = '';
  place: string = '';
  cost: boolean=false;
  time: boolean=false;
  ngOnChanges() {
    if (this.costData) {
      let averageData: any[] = this.costData.normalizedData
      let index: number = 0;
 
      for (var i = 0; i < averageData.length; i++) {
        if (averageData[i].label === 'transit' || averageData[i].label === 'train') {
          this.method = averageData[i].label;
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
      if (this.ranking === 1) {
        this.place = 'gold';
      }
      if (this.ranking === 2) {
        this.place = 'silver';
      }
      if (this.ranking === 3) {
        this.place = 'bronze';
      }
    }
  }

}
