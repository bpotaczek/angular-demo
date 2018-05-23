import { Component } from '@angular/core';

@Component({
    selector: 'app-test',
    templateUrl: './person-test-container.html'
})
export class PersonTestContainerComponent {
    name = 'World 2';

    process(data: string) {
        alert(data);
    }
}
