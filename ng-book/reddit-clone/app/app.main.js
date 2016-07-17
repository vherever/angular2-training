"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var app_reddit_article_1 = require("./app.reddit-article");
var app_reddit_article_2 = require('./app.reddit-article');
var RedditApp = (function () {
    function RedditApp() {
        this.articles = [
            new app_reddit_article_2.Article('Angular 2', 'http://angular.io', 3),
            new app_reddit_article_2.Article('React', 'http://facebook.github.io/react', 2),
            new app_reddit_article_2.Article('Underscore', 'http://underscorejs.org', 1),
        ];
    }
    RedditApp.prototype.addArticle = function (title, link) {
        console.log("Adding article title: " + title.value + "  and link: " + link.value);
        this.articles.push(new app_reddit_article_2.Article(title.value, link.value, 0));
        title.value = '';
        link.value = '';
    };
    RedditApp = __decorate([
        core_1.Component({
            selector: 'reddit',
            templateUrl: 'app/app.main.html',
            directives: [app_reddit_article_1.ArticleComponent]
        }), 
        __metadata('design:paramtypes', [])
    ], RedditApp);
    return RedditApp;
}());
exports.RedditApp = RedditApp;
//# sourceMappingURL=app.main.js.map