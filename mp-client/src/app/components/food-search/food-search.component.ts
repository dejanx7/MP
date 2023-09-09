import { Component, ElementRef, ViewChild, inject } from '@angular/core';
import { Router } from '@angular/router';
import { SearchService } from 'src/app/services/search.service';
@Component({
  selector: 'app-food-search',
  templateUrl: './food-search.component.html',
  styleUrls: ['./food-search.component.css']
})
export class FoodSearchComponent {

  private router =  inject(Router);
  private searchService = inject(SearchService)

  @ViewChild('query')
  query! : ElementRef;

  search(){

    let searchQuery = this.query.nativeElement.value;
    console.log('query searched ', searchQuery);
    
    this.searchService.sharedData = searchQuery;

    this.router.navigate(["/search"]);
  }

}
