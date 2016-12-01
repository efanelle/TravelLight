import { Component, Input, OnChanges } from '@angular/core';
// import { RadarChartComponent } from '../../radar-chart.component';

@Component({
  selector: 'app-car-card',
  templateUrl: './car-card.component.html',
  styleUrls: ['./car-card.component.css']
})
export class CarCardComponent implements OnChanges {
  constructor() { }
  @Input() costData: any;
  @Input() changes: Boolean;
  @Input() rank: number;
  ranking: number = this.rank;
  place: string='';
  method: string='car';
  ngOnChanges() {
    if (this.costData) {
      this.ranking = this.rank
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
