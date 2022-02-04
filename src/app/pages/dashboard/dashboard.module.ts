import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { DashboardComponent } from './dashboard.component';
import { ApiService } from 'src/app/@core/services/api.service';
import { FolderTreeComponent } from 'src/app/components/folder-tree/folder-tree.component';
import { NbCardModule, NbScrollableContainerDimensions } from '@nebular/theme';


@NgModule({
  imports: [
    CommonModule, FormsModule, ReactiveFormsModule,

    NbCardModule,
  ],
  declarations: [
    DashboardComponent,
    FolderTreeComponent
  ],
  providers: [ApiService]
})

export class DashboardModule { }
