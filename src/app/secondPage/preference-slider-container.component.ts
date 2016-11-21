import { Component, OnInit, AfterViewInit, ElementRef, ViewChildren, DoCheck } from '@angular/core';
import { MdSlider } from '@angular2-material/slider'

@Component({
  selector: 'app-preference-slider-container',
  template: `
  <span>Cost</span><br/>
  <md-slider min="0" max="5" value=3></md-slider><br/>
  <span>Time</span><br/>
  <md-slider min="0" max="5" value=3></md-slider><br/>
  <span>Environmental Impact</span><br/>
  <md-slider min="0" max="5" value=3></md-slider><br/>
  `,
  styles: [
  `md-slider {
    width: 30%;
    min-width: 200px;
  }`]
})
export class PreferenceSliderContainerComponent {
  @ViewChildren(MdSlider)
  private mdSlider: QueryList<ElementRef>;
  private costPreference: number;
  private timePreference: number;
  private environmentPreference: number;
  constructor() { }

  ngDoCheck() {
    if (this.mdSlider) {
      let total: number = this.mdSlider._results.map(mdslider => mdslider.value).reduce((a, b) => a + b)
      this.costPreference = this.mdSlider._results[0].value / total
      this.timePreference = this.mdSlider._results[1].value / total
      this.environmentPreference = this.mdSlider._results[2].value / total
      console.log(this.costPreference, this.timePreference, this.environmentPreference)
    }
  }


}
