import { Component } from '@angular/core';

@Component({
    selector: 'my-app',
    templateUrl: 'app/app.component.html'
})

export class AppComponent {
    names: string[];

    constructor() {
        this.names = ['John', 'Liza', 'Erik'];
    }
}