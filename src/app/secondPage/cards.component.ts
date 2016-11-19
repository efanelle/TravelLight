import { Component, OnInit } from '@angular/core';
import { CostInfoService } from './cost-info.service';

@Component({
  selector: 'app-cards',
  template: `
    <div class='cards flex-container'>
      <app-car-card class="flex-item" [costData]="costData"></app-car-card>
      <app-airplane-card class="flex-item" [costData]="costData"></app-airplane-card>
      <app-walk-card class="flex-item"></app-walk-card>
      <app-train-card class="flex-item"></app-train-card>
    </div>
  `,
  styleUrls: ['./cards.component.css']
})
export class CardsComponent {
  constructor(private costInfoService: CostInfoService) {}
    private costData: any;
    ngOnInit() {
      this.costInfoService.getCosts()
        .subscribe(costs => this.costData = costs)
    }

}
