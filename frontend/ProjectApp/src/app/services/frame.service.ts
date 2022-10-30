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

  // return all available time series
  getFrames(): Observable<Frame[]> {
    return this.http.get<Frame[]>(this.apiURL + '/frames');
  }

  // return time series of specific name
  // note in docs about how no fuzzy search
  getFrame(_id: string): Observable<any> {
    const frameURL = '${this.apiURL}/user/${_id}';
    return this.http.get<Frame>(frameURL);
  }

  // post time series to database
  addFrame(frame: Frame) {
    return this.http.post(this.apiURL + '/add', frame, httpOptions);
  }

  // post forceast time series to database
  getScore(frame: Frame) {
    return this.http.post(this.apiURL + '/score', frame, httpOptions);
  }
}
