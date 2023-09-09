import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FoodSearchComponent } from './components/food-search/food-search.component';
import { SearchResultComponent } from './components/search-result/search-result.component';

const routes: Routes = [
  {path: '', component: FoodSearchComponent, title: 'Get macros'},
  {path: 'search', component: SearchResultComponent},
  {path: '**', redirectTo: '', pathMatch: 'prefix'}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
