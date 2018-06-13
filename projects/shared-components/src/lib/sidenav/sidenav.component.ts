import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { User } from '../models';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.css']
})
export class SidenavComponent {
  @Input() user: User;
  @Output() loggedOut: EventEmitter<string> = new EventEmitter<string>();

  logout() {
    this.loggedOut.emit('');
  }
}
