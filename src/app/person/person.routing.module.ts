import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';

import { PersonComponent } from './person.component';
import { PersonListContainerComponent } from './person-list-container';
import { PersonSelectedComponent } from './person-selected';
import { AuthGuard } from '../shared/guards';

const routes: Routes = [
    {
        path: '',
        component: PersonComponent,
        canActivate: [AuthGuard],
        children: [
            { path: 'list', component: PersonListContainerComponent },
            { path: 'detail/:id', component: PersonSelectedComponent }
        ]
    },
];

@NgModule({
    imports: [
        RouterModule.forChild(routes)
    ],
    providers: [
        // AuthGuard
    ],
    exports: [
        RouterModule
    ]
})
export class PersonRoutingModule {}
