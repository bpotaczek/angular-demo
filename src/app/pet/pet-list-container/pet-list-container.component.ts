import { Component, OnInit } from '@angular/core';
import { PetService } from '../../core/services/pet.service';
import { Observable } from 'rxjs/Observable';
import { Pet } from '../../core/models/pet';

@Component({
    selector: 'app-pet-list-container', // <app-pet-list></app-pet-list>
    templateUrl: './pet-list-container.component.html',
    styleUrls: ['./pet-list-container.component.scss']
})
export class PetListContainerComponent implements OnInit {
    pets$: Observable<Pet[]>;

    constructor(private petService: PetService) { }

    ngOnInit(): void {
        this.pets$ = this.petService.GetPets();
        this.petService.GetPets().subscribe(x => console.log(x));
    }
}
