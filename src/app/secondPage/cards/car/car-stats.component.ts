import { Component, Input, OnChanges, Directive, Output } from '@angular/core';
<<<<<<< HEAD
=======
import { ChangeDetectionStrategy} from '@angular/core';
>>>>>>> c7b460880ab3ac1ce1fff64b527417dc940aed31


@Component({
  selector: 'app-car-stats',
  template: `
    <div class='info'>
      <div class='price'>
        <p>
          $ {{cost}}
        </p>
        <i class="ionicons ion-ribbon-b {{ place }}"></i>

      </div>
      <div class='left'>
        <h3>Car</h3>
          <p>
          {{hours}} hours, {{ minutes }} minutes
          </p>
          <p>
<<<<<<< HEAD
          {{emissions}} lbs CO<sub>2 </sub>
          <a href="#/results" [tooltipHtml]="htmlTooltip" (tooltipStateChanged)="tooltipStateChanged($event)">
=======
          {{emissions}} lbs CO<sub>2</sub>
          <a href="#" [tooltipHtml]="htmlTooltip" (tooltipStateChanged)="tooltipStateChanged($event)">
>>>>>>> c7b460880ab3ac1ce1fff64b527417dc940aed31
          <i class="fa fa-info-circle" aria-hidden="true"></i>
          </a>
          </p>
        </div>
    </div>
  `,
  styleUrls: ['./car-stats.component.css'],
<<<<<<< HEAD
=======
  changeDetection: ChangeDetectionStrategy.OnPush
>>>>>>> c7b460880ab3ac1ce1fff64b527417dc940aed31
})

export class CarStatsComponent implements OnChanges {
  constructor() {}
  @Input() costData: any;
  @Input() changes: Boolean;
  @Input() rank:number;
  ranking: number = this.rank;
  place: string='';
  private cost: number;
  private hours: number;
  private minutes: number;
  private emissions: number;
  trees: any=[];
  public numTrees:number=0;

<<<<<<< HEAD
  public htmlTooltip:string = '';
  public tooltipStateChanged(state: boolean):void {
    console.log(`Tooltip is open: ${state}`);
  }
  @Input('tooltipHtml') public htmlContent:string;
  


  ngOnChanges() {
=======
  public dynamicTooltip:string = 'Hello, World!';
  public dynamicTooltipText:string = 'dynamic';
  public htmlTooltip:string = '';
  public tooltipModel:any = {text: 'foo', index: 1};
 
  public tooltipStateChanged(state: boolean):void {
    console.log(`Tooltip is open: ${state}`);
  }

  @Input('tooltip') public content:string;
  @Input('tooltipHtml') public htmlContent:string | TemplateRef<any>;
  @Input('tooltipPlacement') private placement:string = 'top';
  @Input('tooltipIsOpen') private isOpen:boolean;
  @Input('tooltipEnable') private enable:boolean;
  @Input('tooltipAppendToBody') private appendToBody:boolean;
  @Input('tooltipClass') public popupClass:string;
  @Input('tooltipContext') public tooltipContext:any;
  @Input('tooltipPopupDelay') public delay:number = 0;
  @Output() public tooltipStateChanged:EventEmitter<boolean>;

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
    console.log('change noted from car stats Component')
>>>>>>> c7b460880ab3ac1ce1fff64b527417dc940aed31
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

    let data: any[] = this.costData.data
    let index: number = 0;
    for (var i = 0; i < data.length; i++) {
      if (data[i].label === 'car') {
        index = i;
        break;
      }
    }
<<<<<<< HEAD
    this.cost = data[index].data[0].toFixed(2)
    this.hours = Math.floor(data[index].data[1])
    this.minutes = Math.floor((data[index].data[1] % 1)*60) 
    this.emissions = data[index].data[2].toFixed(2)
=======
>>>>>>> c7b460880ab3ac1ce1fff64b527417dc940aed31

    this.numTrees = Math.round(this.emissions/48 * 2)/2;
    console.log(this.numTrees);
    this.htmlTooltip = 'You would need to plant ' + this.numTrees + ' trees to account for the emissions during this trip'

<<<<<<< HEAD
    }
  }
}
=======
  }
}

>>>>>>> c7b460880ab3ac1ce1fff64b527417dc940aed31
