import { Component, Input } from '@angular/core';
import { Person } from 'shared-components';

@Component({
  selector: 'app-person-list',
  templateUrl: './person-list.component.html',
  styleUrls: ['./person-list.component.css']
})
export class PersonListComponent {
  @Input() people: Person[];
}
