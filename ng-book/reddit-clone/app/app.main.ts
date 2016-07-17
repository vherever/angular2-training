import { Component } from '@angular/core';
import {ArticleComponent} from "./app.reddit-article";
import {Article} from './app.reddit-article';

@Component({
    selector: 'reddit',
    templateUrl: 'app/app.main.html',
    directives: [ArticleComponent]
})

export class RedditApp {
    articles: Article[];

    constructor() {
        this.articles = [
            new Article('Angular 2', 'http://angular.io', 3),
            new Article('React', 'http://facebook.github.io/react', 2),
            new Article('Underscore', 'http://underscorejs.org', 1),
        ];
    }

    addArticle(title: HTMLInputElement, link: HTMLInputElement): void {
        console.log(`Adding article title: ${title.value}  and link: ${link.value}`);
        this.articles.push(new Article(title.value, link.value, 0));
        title.value = '';
        link.value = '';
    }
}