import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map, tap } from 'rxjs';
import { Theme } from '../shared/question';

@Injectable({
  providedIn: 'root',
})
export class HttpService {
  constructor(private http: HttpClient) {}

  urlApi = `http://localhost:3000`;

  listAllThemes(): Observable<string[]> {
    return this.http.get<any>(`${this.urlApi}/optionsTheme`)
  }

  listQuestions(): Observable<Theme[]> {
    return this.http.get<Theme[]>(`${this.urlApi}/themes`)
  }

}
