import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { HttpClientModule } from '@angular/common/http';

// google sheets service
import { API_KEY, GoogleSheetsDbService } from 'ng-google-sheets-db';

// material
import { MaterialModule } from './material.module';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatCardModule } from '@angular/material/card';
import { FlexLayoutModule } from '@angular/flex-layout';

// interceptors
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { InterceptService } from './components/generics/utils/interceptor.interceptor';

// generics
import { MenuComponent } from './components/generics/menu/menu.component';
import { FooterComponent } from './components/generics/footer/footer.component';
import { TableComponent } from './components/generics/table/table.component';

// pipes
import { FilterPipe } from './components/generics/utils/filter.pipe';

// directives
import { MaterialElevationDirective } from './components/generics/utils/material-elevation.directive';

// services
import { LoaderService } from './components/generics/utils/loader.service';
import { GoogleDriveService } from './components/nosotrxs/nosotrxs.service';

// components
import { NotFoundComponent } from './components/not-found/not-found.component';
import { HomeComponent } from './components/home/home.component';
import { NosotrxsComponent } from './components/nosotrxs/nosotrxs.component';
import { NosotrxsImagesComponent } from './components/nosotrxs/nosotrxs-images/nosotrxs-images.component';
import { CalendarComponent } from './components/calendars/calendar.component';
import { ResourceComponent } from './components/resources/resource.component';
import { ResourceGenericComponent } from './components/resources/resource/resourceGeneric.component';
import { Resource3DGenericComponent } from './components/resources/resource-3d/resourceGeneric3d.component';
import { ResourcesMinComponent } from './components/home/resources-min/resources-min.component';

// environment
import { environment } from '../environments/environment.prod';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    FooterComponent,
    TableComponent,
    NotFoundComponent,
    HomeComponent,
    NotFoundComponent,
    CalendarComponent,
    NosotrxsComponent,
    NosotrxsImagesComponent,
    ResourceGenericComponent,
    ResourceComponent,
    ResourcesMinComponent,
    FilterPipe,
    MaterialElevationDirective,
    Resource3DGenericComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatGridListModule,
    MatCardModule,
    FlexLayoutModule,
    MaterialModule,
    HttpClientModule
  ],
  providers: [
    InterceptService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: InterceptService,
      multi: true
    },
    LoaderService,
    {
      provide: API_KEY,
      useValue: environment.googleSheetsApiKey,
    },
    GoogleSheetsDbService,
    GoogleDriveService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
