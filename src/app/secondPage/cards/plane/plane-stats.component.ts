import { Component, Input, OnChanges } from '@angular/core';



@Component({
  selector: 'app-plane-stats',
  template: `
    <div class='info'>
        <p>
          Cost: $ {{cost}}
          <br />
          Time: {{hours}} hours, {{ minutes }} minutes
          <br />
          Emissions: {{emissions}} lbs CO<sub>2</sub>
        </p>
        <div class="trees">
          <img id= "flex" *ngFor="let tree of trees" src='{{ tree }}' />
        </div>
    </div>
  `,
  styles: [`
    .info {
      width: 100%;
      border-radius:10px;
    }
    .trees {
      width: 60%;
      margin-left: 20%;
      max-height: 100px;
      zoom: .4;
      padding-bottom: 5%;
    }
  `]
})

    // <div class = "trees" *ngFor="let tree of trees">
    // </div>

export class PlaneStatsComponent implements OnChanges {
  constructor() {}
  @Input() costData: any;
  @Input() changes: Boolean;
  private cost: number;
  private hours: number;
  private minutes: number;
  private emissions: number;
  private trees: any = [];
  public numTrees:number=0;
  public fulltree: string = '../../assets/littletree.png';
  public halftree: string = '../../assets/halftree.png'
  ngOnChanges() {
    if (this.costData) {
      let data: any[] = this.costData.data
      let index: number = 0;
      for (var i = 0; i < data.length; i++) {
        if (data[i].label === 'plane') {
          index = i;
          break;
        }
      }
      this.cost = data[index].data[0].toFixed(2)
      this.hours = Math.floor(data[index].data[1])
      this.minutes = Math.floor((data[index].data[1] % 1)*60) 
      this.emissions = data[index].data[2].toFixed(2)
    }

    this.numTrees = Math.round(this.emissions/48 * 2)/2;
    console.log(this.trees);

    for (var i = 0; i < Math.floor(this.numTrees); i++) {
      this.trees.push(this.fulltree);
    }
    if (this.numTrees % 1 !== 0) {
      this.trees.push(this.halftree);
    }
  }

}
