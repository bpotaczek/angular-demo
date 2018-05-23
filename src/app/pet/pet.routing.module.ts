import { NgModule, Component } from '@angular/core';
import { PetComponent } from './pet.component';
import { RouterModule } from '@angular/router';
import { PetListContainerComponent } from './pet-list-container/pet-list-container.component';

const routes = [
    {
        path: '',
        component: PetComponent,
        children: [
            {
                path: 'list',
                component: PetListContainerComponent
            }
        ]
    }
];

@NgModule({
    imports: [
        RouterModule.forChild(routes)
    ],
    exports: [
        RouterModule
    ]
})
export class PetRoutingModule { }
