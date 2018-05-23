import { Component, OnInit, Input, OnChanges, SimpleChanges } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Pet } from '../../core/models/pet';

@Component({
    selector: 'app-pet-list', // <app-pet-list></app-pet-list>
    templateUrl: './pet-list.component.html',
    styleUrls: ['./pet-list.component.scss']
})
export class PetListComponent implements OnChanges {
    @Input() pets: Pet[];

    ngOnChanges(changes: SimpleChanges): void {
        console.log(changes);
    }
}
