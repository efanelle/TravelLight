import { Component, OnInit, EventEmitter, DoCheck, Output, ViewChild, ElementRef } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { AirportLocationService } from '../../airport-location.service';
import { MapsAPILoader } from 'angular2-google-maps/core';


@Component({
  selector: 'app-drive-loc-input',
  templateUrl: './drive-loc-input.component.html',
  styleUrls: ['./drive-loc-input.component.css']
})

export class DriveLocInputComponent implements OnInit {

  @Output() driveLocNotify: EventEmitter<any> = new EventEmitter();

  @ViewChild('searchOrigin') 
  public searchOriginElementRef: ElementRef;
  @ViewChild('searchDestination')
  public searchDestinationElementRef: ElementRef;

  ngDoCheck() {
    this.driveLocNotify.emit(this.information)
  }

  public searchControlOrigin: FormControl;
  public searchControlDestination: FormControl;

  public information:{originDriveLatitude: number, originDriveLongitude: number, destinationDriveLatitude: number, destinationDriveLongitude: number} = <any>{};
  
  public constructor(private airportLocationService: AirportLocationService, 
  private mapsAPILoader: MapsAPILoader) {}

  ngOnInit() {
    this.searchControlOrigin = new FormControl()
    this.mapsAPILoader.load().then(() => {
      let autocomplete = new google.maps.places.Autocomplete(this.searchOriginElementRef.nativeElement, {
        types: ['address']
      })
      autocomplete.addListener('place_changed', () => {
        let place: google.maps.places.PlaceResult = autocomplete.getPlace();
        this.information.originDriveLatitude = place.geometry.location.lat();
        this.information.originDriveLongitude = place.geometry.location.lng();
      })
    });
    this.searchControlDestination = new FormControl()
    this.mapsAPILoader.load().then(() => {
      let autocomplete = new google.maps.places.Autocomplete(this.searchDestinationElementRef.nativeElement, {
        types: ['address']
      })
      autocomplete.addListener('place_changed', () => {
        let place: google.maps.places.PlaceResult = autocomplete.getPlace();
        this.information.destinationDriveLatitude = place.geometry.location.lat();
        this.information.destinationDriveLongitude = place.geometry.location.lng();
      })
    });
  }

 
}
