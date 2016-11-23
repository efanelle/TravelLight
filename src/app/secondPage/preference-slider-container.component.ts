import { Component, Output, EventEmitter, AfterViewInit, ElementRef, ViewChildren, DoCheck } from '@angular/core';
import { MdSlider } from '@angular2-material/slider'

@Component({
  selector: 'app-preference-slider-container',
  template: `
  <h4>Cost</h4><br/>
  <md-slider class="flex-item" min="0" max="5" value=3 id='teal-slider'></md-slider><br/>
  <h4>Time</h4><br/>
  <md-slider class="flex-item" min="0" max="5" value=3></md-slider><br/>
  <h4>Environmental Impact</h4><br/>
  <md-slider class="flex-item" min="0" max="5" value=3></md-slider><br/>
  `,
  styleUrls: ['./preference-slider-container.component.css']
})
export class PreferenceSliderContainerComponent {

  @Output() preferenceNotify: EventEmitter<any> = new EventEmitter()

  @ViewChildren(MdSlider)
  private mdSlider: {_results:{value}[]};
  private costPreference: number;
  private timePreference: number;
  private environmentPreference: number;
  constructor() { }

  ngDoCheck() {
    this.preferenceNotify.emit([this.costPreference, this.timePreference, this.environmentPreference])
    if (this.mdSlider) {
      let total: number = this.mdSlider._results.map(mdslider => mdslider.value).reduce((a, b) => a + b)
      this.costPreference = this.mdSlider._results[0].value / total
      this.timePreference = this.mdSlider._results[1].value / total
      this.environmentPreference = this.mdSlider._results[2].value / total
    }
  }


}
