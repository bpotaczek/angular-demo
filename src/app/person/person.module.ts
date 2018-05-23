import { NgModule } from '@angular/core';
import { SharedModule } from '../shared';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';

import { effects, reducers } from './store';
import { PersonRoutingModule } from './person.routing.module';

import { PersonComponent } from './person.component';
import { PersonDetailComponent } from './person-detail';
import { PersonListComponent } from './person-list';
import { PersonSelectedComponent } from './person-selected';
import { PersonTableComponent } from './person-table';
import { PersonListContainerComponent } from './person-list-container';
import { PersonTestContainerComponent } from './person-test-container/person-test-container';
import { PersonHelloComponent } from './person-hello/person-hello.component';

@NgModule({
  imports: [
    PersonRoutingModule,
    SharedModule,
    EffectsModule.forFeature(effects),
    StoreModule.forFeature('person', reducers)
  ],
  declarations: [
    PersonComponent,
    PersonDetailComponent,
    PersonListContainerComponent,
    PersonListComponent,
    PersonTableComponent,
    PersonSelectedComponent,
    PersonTestContainerComponent,
    PersonHelloComponent
  ],
  providers: []
})
export class PersonModule { }
