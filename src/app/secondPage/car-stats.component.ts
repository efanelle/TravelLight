import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-car-stats',
  template: `
    <div>
      <h4> Travel by Car</h4>
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
export class CarStatsComponent implements OnInit {
  cost= 0;
  time= '';
  emissions= 0;

  ngOnInit() {
  }

}
