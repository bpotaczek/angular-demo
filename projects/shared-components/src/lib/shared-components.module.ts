import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SidenavComponent } from './sidenav';

import {
  MatSidenavModule,
  MatCommonModule,
  MatToolbarModule,
  MatToolbar,
  MatListModule,
  MatTableModule,
  MatButtonModule,
  MatPaginatorModule,
  MatSortModule,
  MatChipsModule,
  MatFormFieldModule,
  MatInputModule,
  MatTabsModule,
  MatSelectModule,
  MatProgressBarModule,
  MatProgressSpinnerModule,
  MatCardModule
} from '@angular/material';

const matModules = [
  MatSidenavModule,
  MatCommonModule,
  MatToolbarModule,
  MatListModule,
  MatTableModule,
  MatButtonModule,
  MatPaginatorModule,
  MatSortModule,
  MatChipsModule,
  MatFormFieldModule,
  MatInputModule,
  MatTabsModule,
  MatSelectModule,
  MatProgressBarModule,
  MatCardModule
];

@NgModule({
  imports: [CommonModule, ...matModules],
  declarations: [SidenavComponent],
  exports: [CommonModule, SidenavComponent, ...matModules]
})
export class SharedComponentsModule { }
