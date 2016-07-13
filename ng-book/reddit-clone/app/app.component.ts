import { Component } from '@angular/core';

@Component({
    selector: 'reddit',
    templateUrl: 'app/app.component.html'
})

export class AppComponent {
    constructor() {

    }

    addArticle(title: HTMLInputElement, link: HTMLInputElement): void {
        console.log(`Adding article title: ${title.value}  and link: ${link.value}`);
    }
}