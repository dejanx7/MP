import { Component, OnInit, ViewChild, inject } from '@angular/core';
import { FoodSearchComponent } from '../food-search/food-search.component';
import { SearchService } from 'src/app/services/search.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-search-result',
  templateUrl: './search-result.component.html',
  styleUrls: ['./search-result.component.css']
})
export class SearchResultComponent implements OnInit {

  private searchService = inject(SearchService);

  queryReceived : any;
  sub$! : Subscription;
  resultArray : any[] = [];
 
  ngOnInit(): void {
    this.queryReceived = this.searchService.sharedData;
    console.log("query received is " , this.queryReceived);
    

    
    
    this.sub$ = this.searchService.getSearchResults(this.queryReceived).subscribe(
      (results) => {

        console.log('results are', results);
        this.resultArray = results;
        console.log("result array is " , this.resultArray);
        
      }

    );


    
    
      
    

  }
  

  

}
