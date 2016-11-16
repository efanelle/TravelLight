import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
// import { Component2 } from './app/page2.component';


const routes: Routes=[
  {path: '', redirectTo: 'home',  pathMatch: 'full'},
  {path: 'home', component:AppComponent},
  // {path: 'page2', component: 'page2Component'}
]

export const routing: ModuleWithProviders = RouterModule.forRoot(routes);
