import { Component, Input, OnChanges } from '@angular/core';

@Component({
  selector: 'app-car-stats',
  template: `
    <div class='info'>
      <div class='price'>
        <p>
          $ {{cost}}
        </p>
      </div>
      <div class='left'>
        <h3>Car</h3>
          <p>
          {{hours}} hours, {{ minutes }} minutes
          </p>
          <p>
          {{emissions}} lbs CO<sub>2</sub>
          </p>
        </div>
    </div>
  `,
  styles: [`
    .info {
      width: 100%;
      border-radius: 10px;
      height: 100%;
      padding-top:1%;
    }
    .price {
      float:right;
      font-weight:bold;
      padding-right:2%;
    }
    .left {
      float:left;
      text-align:left;
      padding-left:2%;

    }
    p {
      margin:0;
    }
    h3{
      margin-top:0;
      margin-bottom:0;
    }
  `]
})
export class CarStatsComponent implements OnChanges {
  constructor() {}
  @Input() costData: any;
  @Input() changes: Boolean;
  private cost: number;
  private hours: number;
  private minutes: number;
  private emissions: number;

  ngOnChanges() {
    console.log('change noted from car stats Component')
    if (this.costData) {
      let data: any[] = this.costData.data
      let index: number = 0;
      for (var i = 0; i < data.length; i++) {
        if (data[i].label === 'car') {
          index = i;
          break;
        }
      }
      this.cost = data[index].data[0].toFixed(2)
      this.hours = Math.floor(data[index].data[1])
      this.minutes = Math.floor((data[index].data[1] % 1)*60) 
      this.emissions = data[index].data[2].toFixed(2)
    }
  }

}
