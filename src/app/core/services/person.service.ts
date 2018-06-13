import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { environment } from '../../../environments/environment';
import { mapResult } from '../../shared/operators';
import { Person } from 'shared-components';

@Injectable()
export class PersonService {
  private people = [
    { id: 1, firstName: 'Antonio', lastName: 'Feola' },
    { id: 2, firstName: 'Somer', lastName: 'Kitts' },
    { id: 3, firstName: 'Mirella', lastName: 'Conaway' },
    { id: 4, firstName: 'Eugenio', lastName: 'Fife' },
    { id: 5, firstName: 'Matthew', lastName: 'Axelson' },
    { id: 6, firstName: 'Joella', lastName: 'Musson' },
    { id: 7, firstName: 'Risa', lastName: 'Marchan' },
    { id: 8, firstName: 'Shante', lastName: 'Quan' },
    { id: 9, firstName: 'Marita', lastName: 'Ruffin' },
    { id: 10, firstName: 'Rafael', lastName: 'Sinquefield' }
  ];
  constructor(private http: HttpClient) { }

  getPerson(id: number): Observable<Person> {
    // return this.http.get<Person>(environment.serverUrl + 'api/Person/' + id);
    return of(this.people.find(x => x.id === id));
  }

  getPersons(): Observable<Person[]> {
    // return this.http.get<Person[]>(environment.serverUrl + 'api/Person/');
    return of(this.people);
  }

  update(person: Person): Observable<Person> {
    // return this.http.put<Person>(environment.serverUrl + 'api/Person/', person);
    return of(person);
  }
}
