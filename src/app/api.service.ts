import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';

const API_URL = 'https://ws-public.interpol.int/notices/v1/red?&resultPerPage=20&page=';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }

  getRedNotices(pageNumber: number = 1) {
    return this.http.get(`${API_URL}${pageNumber}`)
      .pipe(
        map(({ query, total, _embedded: { notices }, _links }: any) => {
          return { query, total, notices, links: _links };
        })
      );
  }
}
