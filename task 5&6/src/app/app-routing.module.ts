import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CardviewComponent } from './cardview/cardview.component';

const routes: Routes = [
  {path:"card",component:CardviewComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
