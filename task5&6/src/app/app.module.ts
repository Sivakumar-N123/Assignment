import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { ApiService } from './api.service';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CardviewComponent } from './cardview/cardview.component';
import { FilterPipe } from './filter.pipe';
import {HttpClientModule} from'@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgxPaginationModule } from 'ngx-pagination';
// import { AgmCoreModule } from '@agm/core';
import { MultiuploaderComponent } from './multiuploader/multiuploader.component';
// import { TryComponent } from './try/try.component';
// import { FileUploaderService } from './file-uploader.service';

@NgModule({
  declarations: [
    AppComponent,
    CardviewComponent,
    FilterPipe,
    MultiuploaderComponent,
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    CommonModule,
    HttpClientModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    NgxPaginationModule,
    // AgmCoreModule.forRoot({
    //   apiKey: 'AIzaSyAvcDy5ZYc2ujCS6TTtI3RYX5QmuoV8Ffw'
    // })
  
    
  ],
  providers: [ApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
