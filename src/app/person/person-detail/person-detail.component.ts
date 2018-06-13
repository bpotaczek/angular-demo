import { Component, EventEmitter, Output, Input, OnChanges } from '@angular/core';
import { Person } from 'shared-components';

@Component({
  selector: 'app-person-detail',
  templateUrl: './person-detail.component.html',
  styleUrls: ['./person-detail.component.css']
})
export class PersonDetailComponent implements OnChanges {
  @Input() person: Person;
  @Output() updated = new EventEmitter<Person>();

  ngOnChanges() {
    // gets around store freeze issue.
    this.person = Object.assign({}, this.person);
  }
  update() {
    this.updated.emit(this.person);
  }
}
