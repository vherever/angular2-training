import {Component} from "@angular/core";

export class Article {
    title: string;
    link: string;
    votes: number;
    constructor(title: string, link: string, votes?: number) {
        this.title = title;
        this.link = link;
        this.votes = votes || 0;
    }
    voteUp(): any {
        this.votes += 1;
    }
    voteDown(): any {
        this.votes -= 1;
    }
}

@Component({
    selector: 'reddit-article',
    inputs: ['article'],
    host: {
        class: 'row'
    },
    templateUrl: 'app/app.reddit-article.html'
})

export class ArticleComponent {
    article: Article;

    voteUp(): boolean {
        this.article.voteUp();
        return false;
    }

    voteDown(): boolean {
        this.article.voteDown();
        return false;
    }
}