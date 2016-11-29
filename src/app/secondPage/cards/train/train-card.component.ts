import { Component, Input, OnChanges, AfterViewInit } from '@angular/core';
// import { RadarChartComponent } from '../../radar-chart.component';

@Component({
  selector: 'app-train-card',
  template: `
    <div class = 'outer'>
      <div *ngIf="method==='transit'">
        <div *ngIf="ranking===1">
        <img src="../../../assets/trophy.png">
        <i class="ionicons ion-ribbon-b"></i>
        </div>
        <div [class]="stats">
            <h3> Travel by Public Transit</h3>
            <app-train-stats
            [costData]="costData">
            </app-train-stats>
        </div>
      </div>

      <div *ngIf="method==='train'">
      </div>
      <div *ngIf="ranking===1">
        <img src="../../../assets/trophy.png">

        </div>
      <div [class]="stats">
          <h3> Travel by Train or Bus</h3>
          <app-train-stats
          [costData]="costData">
          </app-train-stats>
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
  ngOnInit() {
    let data: any[] = this.costData.data;
    for (var i = 0; i < data.length; i++) {
        if (data[i].label === 'transit' || data[i].label === 'train') {
          this.method = data[i].label;
          console.log('method', this.method)
          break;
        }
      }
  }

  ngOnChanges() {
    if (this.costData) {
      let averageData: any[] = this.costData.normalizedData
      let index: number = 0;
      for (var i = 0; i < averageData.length; i++) {
        if (averageData[i].label === 'transit' || averageData[i].label === 'train') {
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
