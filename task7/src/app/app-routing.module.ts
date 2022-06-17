import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WeatherReportComponent } from './components/weather-report/weather-report.component';


const routes: Routes = [
  {
    path: '',
    component: WeatherReportComponent
  },

  {
    path: ":locationName",
    component: WeatherReportComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
