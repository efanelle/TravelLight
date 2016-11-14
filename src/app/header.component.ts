import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  template: `
    <h1>
      Travel Light
    </h1>
  `,
  styles: [`
    h1 {
      font-size: 4.25em;
      text-align: center;
      color: #FBF3EC;
      text-shadow: 1px 1px 1px #938380;
    }
  `]
})
export class HeaderComponent {

}
