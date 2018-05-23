import { Component, Input, Output, EventEmitter } from '@angular/core';


@Component({
    selector: 'app-person-hello',
    template: './person-hello.component.html'
})
export class PersonHelloComponent {
    @Input() input: string;
    @Output() updated = new EventEmitter<string>();

    process(i: string) {
        this.updated.emit(i);
    }
}
