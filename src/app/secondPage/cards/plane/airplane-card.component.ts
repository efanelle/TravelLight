import { Component, Input, OnChanges } from '@angular/core';
// import { RadarChartComponent } from '../../radar-chart.component';

@Component({
  selector: 'app-airplane-card',
  templateUrl: './airplane-card.component.html',
  styleUrls: ['./airplane-card.component.css']
})
export class AirplaneCardComponent implements OnChanges {
  constructor() { }
  @Input() costData: any;
  @Input() changes: Boolean;
  @Input() rank: number;
  ranking: number = 0;
  place: string='';
  method: string='plane';
  ngOnChanges() {
    // TODO: Ivey factor this out into it's own function
    if (this.costData) {
      this.ranking = this.rank;
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
