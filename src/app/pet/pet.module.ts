import { NgModule } from '@angular/core';
import { PetComponent } from './pet.component';
import { SharedModule } from '../shared';
import { PetRoutingModule } from './pet.routing.module';
import { PetListComponent } from './pet-list/pet-list.component';
import { PetService } from '../core/services/pet.service';
import { PetListContainerComponent } from './pet-list-container/pet-list-container.component';

@NgModule({
  declarations: [
    PetComponent,
    PetListComponent,
    PetListContainerComponent
  ],
  imports: [
    SharedModule,
    PetRoutingModule,
  ],
  providers: [ PetService ]
})
export class PetModule { }
