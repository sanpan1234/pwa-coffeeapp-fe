import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { GeolocationService } from './services/geolocation.service';
import { DataService } from './services/data.service';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {
  MatButtonModule, MatIconModule, MatInputModule, MatSelectModule,
  MatSliderModule, MatToolbarModule, MatCardModule, MatSlideToggleModule,
  MatSnackBarModule
} from '@angular/material';
import 'hammerjs';
import { BrowserDomAdapter } from '@angular/platform-browser/src/browser/browser_adapter';
import { ListComponent } from './components/list/list.component';
import { CoffeeComponent } from './components/coffee/coffee.component';

const routes: Routes = [
  { path: '', component: ListComponent },
  { path: 'coffee', component: CoffeeComponent },
  { path: 'coffee/:id', component: CoffeeComponent }
]

@NgModule({
  declarations: [
    AppComponent,
    ListComponent,
    CoffeeComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(routes),
    FormsModule,
    HttpModule,
    MatButtonModule, MatIconModule, MatInputModule, MatSelectModule,
    MatSliderModule, MatToolbarModule, MatCardModule, MatSlideToggleModule,
    MatSnackBarModule
  ],
  providers: [GeolocationService, DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
