import { RouterModule, Routes } from '@angular/router';
import { PopularMoviesComponent } from './pages/main-page/main-page.component';
import { SearchPageComponent } from './pages/search-page/search-page.component';
import { MoviePageComponent } from './pages/movie-page/movie-page.component';
import { NgModule } from '@angular/core';

export const routes: Routes = [
  {
    path: "popular-movies",
    component: PopularMoviesComponent
  },
  {
    path: "search-movies",
    component: SearchPageComponent
  },
  {
    path: "by/:id",
    component: MoviePageComponent
  },
  {
    path: "**",
    redirectTo: "popular-movies"
  }
]


@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [
    RouterModule
  ],
})
export class MoviesRoutingModule { }
