import { Injectable } from '@angular/core';
import { Pet } from '../models/pet';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';

@Injectable()
export class PetService {
    pets = [
        {
            Name: 'Sparky'
        },
        {
            Name: 'Spot'
        },
        {
            Name: 'Little Terror'
        },
        {
            Name: 'Mr. Ed'
        },
        {
            Name: 'Lassie'
        }
    ];

    GetPets(): Observable<Array<Pet>> {
        return of(this.pets);
    }
}
