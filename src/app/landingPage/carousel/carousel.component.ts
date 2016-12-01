import { Component } from '@angular/core';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css']
})
export class CarouselComponent {
  public slides:Array<any> = [
    { image: `../../../assets/redbike2.jpg` },
    { image: `../../../assets/planewing.jpg` },
    { image: `../../../assets/bluecar.jpg` },
    { image: `../../../assets/canyonbus2.jpg` }
  ];
}
