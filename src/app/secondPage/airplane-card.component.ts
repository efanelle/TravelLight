import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-airplane-card',
  template: `
    <div class = 'outer'>
      <div class='tab'>
        <img class='bigplane' src='../assets/plane2.png'/>
        <p>PLANE</p>
        <img class='smplane' src='../assets/airplaneIcon.png'/>
      </div>
      <app-d3-vis
      transportMode="plane">
      </app-d3-vis>
      <app-plane-stats></app-plane-stats>
    </div>
  `,
  styles: [`
    .outer {
      min-height: 70vh;
      width: 40vw;
      // background-color:lightblue;
      border: solid 1px black;
      border-radius: 10px;
      float:left;
      margin-left:7%;
    }
    .outer:hover{
      box-shadow: 0 0 20px rgba(0, 0, 0, 0.4);
    }
    p{
      margin-right: 5%;
      text-align:right;
      font-size:.5em;
      margin-bottom:0;
    }
    .smplane {
      height: 5%;
      width: 5%;
      margin-right: 5%;
      float: right;
    }
    .tab {
      float: right;
      width: 100%;
    }
    .bigplane {
      height: 100px;
      width:100%;
      clear:both;
      border-radius:10px;
    }
  `]
})
export class AirplaneCardComponent implements OnInit {

  constructor() { }
  ngOnInit() {
  }

}
