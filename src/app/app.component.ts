import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Observable, catchError, map, of } from 'rxjs';
import { GOOGLE_MAPS_API_KEY } from 'src/api-keys';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {
  public apiLoaded: Observable<boolean>;
  constructor(httpClient: HttpClient) {
    this.apiLoaded = httpClient.jsonp('https://maps.googleapis.com/maps/api/js?key='+ GOOGLE_MAPS_API_KEY, 'callback')
        .pipe(
          map(() => true),
          catchError(() => of(false)),
        );

  }

}
