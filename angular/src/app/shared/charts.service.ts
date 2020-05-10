import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {environment} from '../../environments/environment';
import {map} from 'rxjs/operators';

@Injectable({providedIn: 'root'})
export class ChartsService {

  constructor(private http: HttpClient) {
  }

  getAll(): Observable<any> {

    return this.http.get(`${environment.apiUrl}/chart`)
      .pipe(map((response: any) => {

        return response;

      }));
  }
}
