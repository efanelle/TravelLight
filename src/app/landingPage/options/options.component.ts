import { Component, ElementRef, ViewChild, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ModalDirective } from '../../../../node_modules/ng2-bootstrap/components/modal/modal.component';
import { FormBuilder, Validators, FormGroup, FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AirportLocationService } from '../airport-location.service';
import { CostInfoService } from '../../secondPage/cost-info.service';
import { SendCostDataService } from '../../send-cost-data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-options',
  templateUrl: './options.component.html',
  styleUrls: ['./options.component.css']
})

export class OptionsComponent {

  public tripForm: FormGroup
  private information:any = {};
  private showLocalFields:boolean = false;
  private showAirportFields:boolean = false;


  constructor(private costInfoService: CostInfoService, 
  private sendCostDataService: SendCostDataService,
  private router: Router,
  public fb: FormBuilder) {
    this.tripForm = this.fb.group({
      driveOrigin: ['', Validators.required],
      driveDestination: ['', Validators.required]
    })
    setInterval(() => {
      console.log(this.tripForm)
    }, 10000)

  }

  onDriveLocNotify(payload:Object) {
    this.information = Object.assign(this.information, payload)
    if (this.information.originDriveLatitude && this.information.originDriveLongitude && this.information.destinationDriveLatitude && this.information.destinationDriveLongitude) {
      this.showLocalFields = true;
      let dist = this.costInfoService.getDistance([this.information.originDriveLatitude, this.information.originDriveLongitude], [this.information.destinationDriveLatitude, this.information.destinationDriveLongitude])
      if (dist > 100) {
        this.showAirportFields = true;
        this.information.tripType = 'distant';
      } else {
        this.showAirportFields = false;
        this.information.tripType = 'local';
      }
    }
}

  onLocNotify(payload:Object) {
    this.information = Object.assign(this.information, payload);
  }

  onDateNotify(payload:string) {
    this.information.date = payload;
  }

  onTravelersNotify(payload:number) {
    this.information.travelers = payload;
  }

  onClick() {
    console.log('sending ' + this.information)
    this.costInfoService.sendUserInput(this.information)
    //this.costInfoService.sendStubData()
    .subscribe(results => {
      this.sendCostDataService.sendData(results)
      this.router.navigate(['results'])
    })
  }

  @ViewChild('childModal') public childModal:ModalDirective;
 
  public showChildModal():void {
    this.childModal.show();
  }
 
  public hideChildModal():void {
    this.childModal.hide();
  }

}
