import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'poster'
})
export class PosterPipe implements PipeTransform {

  private imageBaseUrl = 'https://image.tmdb.org/t/p/w500';
  private defaultImage = 'assets/no-image.jpg';

  transform(posterPath: string | null): string {

    if (!posterPath) {
      return this.defaultImage;
    }

    return `${this.imageBaseUrl}${posterPath}`;
  }

}
