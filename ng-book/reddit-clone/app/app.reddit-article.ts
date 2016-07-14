import {Component} from "@angular/core";
@Component({
    selector: 'reddit-article',
    host: {
        class: 'row'
    },
    templateUrl: 'app/app.reddit-article.html'
})

export class ArticleComponent { 
    votes: number;
    title: string;
    link: string;
    constructor() {
        this.title = 'Angular2';
        this.link = 'http://angular.io';
        this.votes = 10;
    }
    voteUp() {
        this.votes += 1;
    }
    voteDown() {
        this.votes -= 1;
    }
}