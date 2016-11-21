import { Component, ElementRef, ViewChild, ViewChildren } from '@angular/core';
import { SendCostDataService } from '../send-cost-data.service';
import { MdSlider } from '@angular2-material/slider'

@Component({
  selector: 'app-results',
  templateUrl: './second.page.component.html',
  styleUrls: ['./second.page.component.css']
})
export class ResultsComponent {
  // @ViewChildren(MdSlider)
  // private mdSlider: QueryList<ElementRef>;
  constructor(private sendCostDataService: SendCostDataService) {}
  private costData: Object;
  public sliderValue: number;
  ngOnInit() {
    //setInterval(() => console.log(this.mdSlider._results[0].value, this.mdSlider._results[1].value, this.mdSlider._results[2].value), 5000)
    this.costData = this.sendCostDataService.dataStore[0];
  }
}
