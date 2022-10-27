import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

import { Frame } from '../frames/frame';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};


@Injectable({
  providedIn: 'root'
})
export class FrameService {

  // Rest API URL
  private apiURL = 'dummy'; 

  constructor(private http: HttpClient) { }

  // Will return all available dataframes
  getFrames(): Observable<Frame[]> {
    return this.http.get<Frame[]>(this.apiURL + '/frames')
  }

}
