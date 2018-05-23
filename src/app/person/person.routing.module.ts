import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';

import { PersonComponent } from './person.component';
import { PersonListContainerComponent } from './person-list-container';
import { PersonSelectedComponent } from './person-selected';
import { AuthGuard } from '../shared/guards';
import { PersonTestContainerComponent } from './person-test-container/person-test-container';

const routes: Routes = [
    {
        path: '',
        component: PersonComponent,
        canActivate: [AuthGuard],
        children: [
            { path: 'list', component: PersonListContainerComponent, data: { foo: 'bar' } },
            { path: 'detail/:id', component: PersonSelectedComponent },
            { path: 'test', component: PersonTestContainerComponent }
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
