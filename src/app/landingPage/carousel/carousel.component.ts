import { Component } from '@angular/core';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css']
})
export class CarouselComponent {
  public slides:Array<any> = [
    {
      image: `../../../assets/TravelLight.jpg`,
      text: `TravelLight!`
    },
    {
      image: `../../../assets/drive.jpeg`,
      text: `Driving! Woo!`
    },
    {
      image: `../../../assets/walking.jpeg`,
      text: `Walking! Aww yeah!`
    }
  ];
}
