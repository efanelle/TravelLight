import { Component } from '@angular/core';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css']
})
export class CarouselComponent {
  public slides:Array<any> = [
    {
      image: `../../../assets/redbike.jpg`,
      text: `TravelLight!`
    },

    {
      image: `../../../assets/redbike2.jpg`,
      text: `TravelLight!`
    },

    {
      image: `../../../assets/planewing.jpg`,
      text: `Driving! Woo!`
    },

    {
      image: `../../../assets/bluecar.jpg`,
      text: `Walking! Aww yeah!`
    },

    {
      image: `../../../assets/canyonbus2.jpg`,
      text: `Walking! Aww yeah!`
    }
  ];
}
