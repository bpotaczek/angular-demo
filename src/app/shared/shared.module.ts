import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { FlexLayoutModule } from '@angular/flex-layout';

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

import { SidenavComponent } from './sidenav/sidenav.component';
import { LoginComponent } from './login';
import { HomeComponent } from './home';
// import { BatchDisableReprocessPipe } from './pipes/disable-batch-reprocess.pipe';

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
  imports: [
    CommonModule,
    FormsModule,
    RouterModule,
    FlexLayoutModule,
    ...matModules
  ],
  declarations: [
    SidenavComponent,
    LoginComponent,
    HomeComponent,
    // BatchDisableReprocessPipe
  ],
  exports: [
    SidenavComponent,
    LoginComponent,
    // BatchDisableReprocessPipe,
    FlexLayoutModule,
    ...matModules,
    CommonModule,
    FormsModule
  ]
})
export class SharedModule { }
