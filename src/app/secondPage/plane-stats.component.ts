import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-plane-stats',
  template: `
    <div>
    <h4>Travel by Plane</h4>
      <p>
        Cost: {{cost}} dollars
        <br />
        Time: {{time}}
        <br />
        Emissions: {{emissions}} lbs CO<sub>2</sub>
      </p>
    </div>
  `,
  styles: [`
    div {
      // background-color: #ffebcd;
      width: 100%;
      height: 18%;
      margin-top: -50px;
      margin-bottom:10px;
      text-align: center;
      float: left;
      font-family: Lucida Sans Grande;
    }
  `]
})
export class PlaneStatsComponent implements OnInit {
  cost= 178;
  time= '2 hours, 45 min';
  emissions= 76;

  ngOnInit() {
  }

}
