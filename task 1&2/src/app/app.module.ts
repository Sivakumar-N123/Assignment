import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListViewComponent } from './list-view/list-view.component';
import { SearchPipe } from './search.pipe';
import { FilterPipe } from './filter.pipe';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ProblemComponent } from './problem/problem.component';
import { CrudComponent } from './crud/crud.component';
import { HttpClientModule } from '@angular/common/http';
import { WebapiService } from './webapi.service';
import { MapComponent } from './map/map.component';
import { UsmapComponent } from './usmap/usmap.component';


@NgModule({
  declarations: [
    AppComponent,
    ListViewComponent,
    SearchPipe,
    FilterPipe,
    ProblemComponent,
    CrudComponent,
    MapComponent,
    UsmapComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
   
    
    
    
  ],
  providers: [WebapiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
