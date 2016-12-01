import { Component, OnInit, EventEmitter, DoCheck, Output } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { CarInfoService } from '../car-info.service';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import { TypeaheadMatch } from '../../../../node_modules/ng2-bootstrap/components/typeahead/typeahead-match.class';

@Component({
  selector: 'app-car-input',
  templateUrl: './car-input.component.html',
  styleUrls: ['./car-input.component.css']
})
export class CarInputComponent{

  @Output() carNotify: EventEmitter<any> = new EventEmitter();

  ngDoCheck() {
    this.carNotify.emit(this.information)
  }

  public stateCtrl:FormControl = new FormControl();

  public myForm:FormGroup = new FormGroup({
    state: this.stateCtrl
  });

  public dataSource:Observable<any>;
  public carSearch:string = '';
  // public carMake:string = '';
  // public carModel:string = '';
  // public carYear:string = '';
  public typeaheadCarSearchLoading:boolean = false;
  public typeaheadCarSearchNoResults:boolean = false;
  // public typeaheadCarMakeLoading:boolean = false;
  // public typeaheadCarMakeNoResults:boolean = false;
  // // public typeaheadCarModelLoading:boolean = false;
  // public typeaheadCarModelNoResults:boolean = false;
  // public typeaheadCarYearLoading:boolean = false;
  // public typeaheadCarYearNoResults:boolean = false;
  public information:{
    EPM:number,
    MPG:number,
    Car:string
  } = <any>{};

  public constructor(private carInfoService:CarInfoService) {
    this.dataSource = Observable.create((observer:any) => {
      this.carInfoService
      .getCars(this.carSearch)
      .subscribe((result:any) => {
        observer.next(result.filter(item => {
          let query = new RegExp(this.carSearch, 'ig');
          if(!!item.FullName){
            return item.FullName.match(query)
          }
        }))
      })
    })
   }

   public changeTypeaheadCarSearchLoading(e:boolean):void {
     this.typeaheadCarSearchLoading = e;
   }

  public changeTypeaheadCarSearchNoResults(e:boolean):void {
     this.typeaheadCarSearchLoading = e;
   }

  public typeaheadOnSelect(e:TypeaheadMatch):void {
    let type:string;
    if(e.value === this.carSearch){
      this.information.EPM = e.item.EPM;
      this.information.MPG = e.item.MPG;
      this.information.Car = e.item.FullName
    }
  }

}
