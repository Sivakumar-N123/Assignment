import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CalculatorComponent } from './calculator/calculator.component';
import { ChartComponent } from './chart/chart.component';
import { TryComponent } from './try/try.component';

const routes: Routes = [
  {path:"chart",component:ChartComponent},
  {path:"calc",component:CalculatorComponent},
  {path:"try",component:TryComponent},


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
