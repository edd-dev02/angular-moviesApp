import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PopularMoviesComponent } from './pages/main-page/main-page.component';
import { SearchPageComponent } from './pages/search-page/search-page.component';
import { MoviePageComponent } from './pages/movie-page/movie-page.component';



@NgModule({
  declarations: [
    PopularMoviesComponent,
    SearchPageComponent,
    MoviePageComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    PopularMoviesComponent,
    SearchPageComponent,
  ]
})
export class MoviesModule { }
