import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PopularMoviesComponent } from './pages/main-page/main-page.component';



@NgModule({
  declarations: [
    PopularMoviesComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    PopularMoviesComponent,
  ]
})
export class MoviesModule { }
