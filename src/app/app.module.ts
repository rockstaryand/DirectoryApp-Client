import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';


import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NbThemeModule, NbLayoutModule } from '@nebular/theme';
import { NbEvaIconsModule } from '@nebular/eva-icons';
import { ApiService } from './@core/services/api.service';
import { HttpClientModule } from '@angular/common/http';



@NgModule({
  imports: [
    AppRoutingModule,
    CommonModule,
    BrowserModule,
    RouterModule,
    FormsModule,
    BrowserAnimationsModule,
    NbThemeModule.forRoot({ name: 'default' }),
    NbLayoutModule,
    NbEvaIconsModule,
    HttpClientModule

  ],
  declarations: [
    AppComponent,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
