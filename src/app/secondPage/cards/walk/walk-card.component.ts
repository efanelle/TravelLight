import { Component, Input, OnChanges } from '@angular/core';
// import { RadarChartComponent } from '../../radar-chart.component';

@Component({
  selector: 'app-walk-card',
  template: `
    <div class = 'outer'>
      <i class="ionicons ion-ribbon-b {{ place }}"></i>
      <div [class]="stats">
        <h3> Travel by Foot</h3>
        <app-walk-stats 
        [costData]="costData">
        </app-walk-stats>
      </div>
    </div>
  `,
  styleUrls: ['./walk-card.component.css']
})
// <img src="../../../assets/trophy.png">

export class WalkCardComponent implements OnChanges {
  constructor() { }

  @Input() costData: any;
  ranking: number = 0;
  place: string = '';
  ngOnChanges() {
    // TODO: Ivey factor this out into it's own function
    if (this.costData) {
      let averageData: any[] = this.costData.normalizedData
      let index: number = 0;
      for (var i = 0; i < averageData.length; i++) {
        if (averageData[i].label === 'walking') {
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
