import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';

const API_URL = 'https://ws-public.interpol.int/notices/v1/red';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }

  getRedNotices() {
    return this.http.get(API_URL).pipe(
      map(({ query, total, _embedded: { notices }, _links }: any) => {
        return { query, total, notices, links: _links };
      })
    );
  }
}
