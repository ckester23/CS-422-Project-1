import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { saveAs } from 'file-saver';


@Injectable({
  providedIn: 'root'
})
export class FrameService {

  // Rest API URL
  private apiURL = 'http://127.0.0.1:5000'; 

  constructor(private http: HttpClient) { }

  // return all available time series
  getFrames(): Observable<any> {
    return this.http.get<any[]>(this.apiURL + '/dataSets');
  }

  // return time series of specific name
  // note in docs about how no fuzzy search
  getFrame(colName: string, fileName: string): Observable<any> {
    console.log(this.apiURL + '/' + colName + '/' + fileName);
    return this.http.get<any>(this.apiURL + '/' + colName + '/' + fileName)
  }
}
