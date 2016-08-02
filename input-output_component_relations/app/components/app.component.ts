import { Component } from '@angular/core';
import { ChildComponent } from './child.component';

@Component ({
    selector: 'app',
    templateUrl: 'app/templates/app.component.html',
    directives: [ChildComponent],
})

export class App {
    childValue: string;
}
