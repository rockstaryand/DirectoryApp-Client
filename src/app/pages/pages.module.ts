import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { PagesComponent } from './pages.component';
import { PagesRoutingModule } from './pages.routing';
import { DashboardModule } from './dashboard/dashboard.module';
import { ApiService } from '../@core/services/api.service';

// import {
//   NbMenuModule, NbActionsModule,
//   NbLayoutModule, NbButtonModule, NbUserModule, NbToastrModule,
//   NbDialogModule, NbWindowModule, NbDatepickerModule
// } from 'nebular/theme';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    PagesRoutingModule,
    DashboardModule,

  ],
  declarations: [
    PagesComponent
  ],
  providers: [

  ]
})

export class PagesModule {

}
