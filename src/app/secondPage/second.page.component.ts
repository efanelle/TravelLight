import { Component } from '@angular/core';
import { SendCostDataService } from '../send-cost-data.service';
import { MdSlider } from '@angular2-material/slider'

@Component({
  selector: 'app-results',
  templateUrl: './second.page.component.html',
  styleUrls: ['./second.page.component.css']
})
export class ResultsComponent {
  constructor(private sendCostDataService: SendCostDataService) {}
  private costData: Object;
  public sliderValue: number;
  ngOnInit() {
    this.costData = this.sendCostDataService.dataStore[0];
  }
}
