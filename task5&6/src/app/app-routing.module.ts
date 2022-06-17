import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CardviewComponent } from './cardview/cardview.component';
import { MultiuploaderComponent } from './multiuploader/multiuploader.component';

const routes: Routes = [
  {path:"card",component:CardviewComponent},
  {path:"uploader",component:MultiuploaderComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
