import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PopularMoviesComponent } from './pages/main-page/main-page.component';
import { SearchPageComponent } from './pages/search-page/search-page.component';
import { MoviePageComponent } from './pages/movie-page/movie-page.component';
import { MoviesRoutingModule } from './movies-routing.module';
import { SharedModule } from '../shared/shared.module';
import { CardMovieComponent } from './components/card-movie/card-movie.component';
import { PosterPipe } from './pipes/poster.pipe';



@NgModule({
  declarations: [
    PopularMoviesComponent,
    SearchPageComponent,
    MoviePageComponent,
    CardMovieComponent,
    PosterPipe
  ],
  imports: [
    CommonModule,
    MoviesRoutingModule,
    SharedModule,
  ],
  exports: [
    PopularMoviesComponent,
    SearchPageComponent,
  ]
})
export class MoviesModule { }
