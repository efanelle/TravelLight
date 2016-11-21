import { Component, OnInit, AfterViewInit, ElementRef, ViewChildren } from '@angular/core';
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
export class PreferenceSliderContainerComponent implements AfterViewInit {
  @ViewChildren(MdSlider)
  private mdSlider: QueryList<ElementRef>;
  constructor() { }

  ngAfterViewInit() {
    setInterval(() => console.log(this.mdSlider._results[0].value, this.mdSlider._results[1].value, this.mdSlider._results[2].value), 5000)
  }

}
