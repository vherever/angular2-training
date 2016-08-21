import {Component} from "@angular/core";
import {FORM_DIRECTIVES, CORE_DIRECTIVES} from "@angular/common";
import {ROUTER_DIRECTIVES} from "@angular/router";
import {Person, SearchService} from "../shared/services/search.service";

@Component({
  selector: 'sd-search',
  moduleId: module.id,
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css'],
  directives: [FORM_DIRECTIVES, CORE_DIRECTIVES, ROUTER_DIRECTIVES]
})
export class SearchComponent {
  loading: boolean;
  query: string;
  searchResults: Array<Person>;

  constructor(public searchService: SearchService) {
    console.log('initialized search component');
  }

  search(): void {
    this.searchService.getAll().subscribe(
      data => {
        this.searchResults = data;
      },
      error => console.log(error)
    );
  }
}
