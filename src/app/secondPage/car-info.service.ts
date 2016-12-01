import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class CarInfoService {
  private carModelUrl = 'http://localhost:1337/api/carModels'
  constructor(private http: Http) { }

  getCars(carSearch: string): Observable < any[] > {
    return this.http.get(this.carModelUrl)
    .map(res => {
      return res.json();
    })
  }
}
