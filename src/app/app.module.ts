import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { ModalModule } from 'ng2-bootstrap/components/modal';
import { TypeaheadModule } from 'ng2-bootstrap/components/typeahead';
<<<<<<< bdbcdefecea0477b07ed0e63d6a12e8bde18b3dd
import { DatepickerModule } from 'ng2-bootstrap/components/datepicker';
=======
import { ChartsModule } from 'ng2-charts/ng2-charts';
>>>>>>> merge

//App Root
import { AppComponent } from './app.component';

//Home page
import { HomeComponent } from './firstPage/home.component';
import { HeaderComponent } from './firstPage/header/header.component';
import { OptionsComponent } from './firstPage/options/options.component';
import { LocInputComponent } from './firstPage/options/loc-input/loc-input.component';
import { DateInputComponent } from './firstPage/options/date-input/date-input.component';
import { TravelersComponent } from './firstPage/options/travelers/travelers.component';
import { SloganComponent } from './firstPage/slogan/slogan.component';

//Results page
import { ResultsComponent } from './secondPage/second.page.component';
import { BannerComponent } from './secondPage/banner.component';
import { CarCardComponent } from './secondPage/car-card.component';
import { AirplaneCardComponent } from './secondPage/airplane-card.component';
import { SearchBarComponent} from './secondPage/search-bar.component';
import { D3VisComponent } from './secondPage/d3-vis.component';
import { CarStatsComponent } from './secondPage/car-stats.component';
import { PlaneStatsComponent } from './secondPage/plane-stats.component';
import { BikeCardComponent } from './secondPage/bike-card.component';
import { TrainCardComponent } from './secondPage/train-card.component';
import { WalkCardComponent } from './secondPage/walk-card.component';
import { RadarChartComponent } from './secondPage/radar-chart.component'

//Services
import { CostInfoService } from './secondPage/cost-info.service';


import { routing } from './app.routing';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    SloganComponent,
    OptionsComponent,
    ResultsComponent,
    BannerComponent,
    CarCardComponent,
    AirplaneCardComponent,
    SearchBarComponent,
    D3VisComponent,
    CarStatsComponent,
    PlaneStatsComponent,
    BikeCardComponent,
    TrainCardComponent,
    WalkCardComponent,
<<<<<<< bdbcdefecea0477b07ed0e63d6a12e8bde18b3dd
    LocInputComponent,
    DateInputComponent,
    TravelersComponent
=======
    RadarChartComponent
>>>>>>> merge
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ModalModule,
    TypeaheadModule,
<<<<<<< bdbcdefecea0477b07ed0e63d6a12e8bde18b3dd
    DatepickerModule,
    routing
=======
    routing,
    ChartsModule
>>>>>>> merge
  ],
  providers: [CostInfoService],
  bootstrap: [AppComponent]
})
export class AppModule { }