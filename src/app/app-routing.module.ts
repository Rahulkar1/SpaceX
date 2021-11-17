import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FlightsComponent } from './flights/flights.component';
import { EmpinfoComponent } from './empinfo/empinfo.component';
const routes: Routes = [
  {
   path:'flights',
   component:FlightsComponent
  },
  {
    path:'empdata',
    component:EmpinfoComponent
  }
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
