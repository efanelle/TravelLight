import { Injectable, EventEmitter, Output, NgZone } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { TravelInfo } from './travelInfo';
import { Observable } from 'rxjs/Rx';
import { Subject }    from 'rxjs/Subject';
import { TRAVELDATA, NORMALIZERS } from './stubData';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class CostInfoService {
  //@Output() receivedData = new EventEmitter<Object>()
  private planeInfoUrl = 'http://localhost:1337/api/planes';
  private averagesUrl = 'http://localhost:1337/api/normalizers';
  private carInfoUrl = 'http://localhost:1337/api/cars';
  private travelInfo: TravelInfo[] = [];
  private averageData: { data: any[], distance: number };
  private normalizedData: TravelInfo[];

  constructor(private http: Http, private _ngZone:NgZone) { }
   

  sendUserInput(userInput:Object) {
    console.log('called get costs from cost info service')
    return new Observable(observer => {
      this.getCosts()
      .subscribe(data => observer.next(data))
    })
  }

  getCosts() { return Observable.forkJoin(
      this.http.get(this.carInfoUrl),
      this.http.get(this.planeInfoUrl),
      this.http.get(this.averagesUrl)
    )
    .map(results => results.map(res => res.json()))
    .map(result => {
      for (var i = 0; i <= result.length - 2; i++) {
        this.travelInfo.push({
          data: [result[i].cost, result[i].time, result[i].emissions],
          label: result[i].mode
        })
      }
      let averages = result[result.length - 1]
      this.averageData = {
        distance: averages.distance,
        data: [averages.cost, averages.time, averages.emissions]
      }
      this.normalizedData = this.travelInfo.map(travelMethod => {
        let travelData: any[] = travelMethod.data.map((item, i) => {
          return item / this.averageData.data[i]
        })
        return {
          data: travelData,
          label: travelMethod.label
        }        
      })
      return {data: this.travelInfo, normalizedData: this.normalizedData}
    })
  }
}
