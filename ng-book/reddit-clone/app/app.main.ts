import { Component } from '@angular/core';
import {ArticleComponent} from "./app.reddit-article";

@Component({
    selector: 'reddit',
    templateUrl: 'app/app.main.html',
    directives: [ArticleComponent]
})

export class RedditApp {
    constructor() {

    }

    addArticle(title: HTMLInputElement, link: HTMLInputElement): void {
        console.log(`Adding article title: ${title.value}  and link: ${link.value}`);
    }
}