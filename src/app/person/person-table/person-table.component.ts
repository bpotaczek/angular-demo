import { Component, OnChanges, Input, ViewChild } from '@angular/core';
import { Person } from '../../core/models';
import { MatTableDataSource, MatPaginator, MatSort } from '@angular/material';

@Component({
  selector: 'app-person-table',
  templateUrl: './person-table.component.html',
  styleUrls: ['./person-table.component.css']
})
export class PersonTableComponent implements OnChanges {
  @Input() people: Person[];
  peopleDataSource: MatTableDataSource<Person> = new MatTableDataSource<Person>();
  displayedColumns = [ 'Id', 'FirstName', 'LastName', 'Button' ];

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  ngOnChanges() {
    if (this.people) {
      this.peopleDataSource.paginator = this.paginator;
      this.peopleDataSource.sort = this.sort;
      this.peopleDataSource = new MatTableDataSource(this.people);
    }
  }
}
