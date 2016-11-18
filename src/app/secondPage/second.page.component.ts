import { Component } from '@angular/core';
import { CostInfoService } from './cost-info.service';

@Component({
  selector: 'app-results',
  templateUrl: './second.page.component.html',
  styleUrls: ['./second.page.component.css']
})
export class ResultsComponent {
  constructor(private costInfoService: CostInfoService) {}
  private costData: any;
  ngOnInit() {
    this.costInfoService.getCosts()
      .subscribe(costs => this.costData = costs)
  }
}
