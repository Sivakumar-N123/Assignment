import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CrudComponent } from './crud/crud.component';
import { ListViewComponent } from './list-view/list-view.component';
import { MapComponent } from './map/map.component';
import { ProblemComponent } from './problem/problem.component';
import { UsmapComponent } from './usmap/usmap.component';

const routes: Routes = [
  {path:"",redirectTo:"/pro",pathMatch:"full"},
  {path:"list",component:ListViewComponent},
  {path:"pro",component:ProblemComponent},
  {path:"crud",component:CrudComponent},
  {path:"map",component:MapComponent},
  {path:"usmap",component:UsmapComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
