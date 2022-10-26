import { Injectable } from '@angular/core';
import { Frame } from '../frames/frame';
import { Observable, of } from 'rxjs';
import { MessageService } from './message.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class FrameService {
  // url to web api
  private framesUrl = 'api/frames';

  constructor(
    private http: HttpClient,
    private messageService: MessageService) { }

  getFrames(): Observable<Frame[]>{
    return this.http.get<Frame[]>(this.framesUrl)
  }

  // i do not understand this
  // from angular tutorial
  private log(message: string) {
    this.messageService.add(`FrameService: ${message}`)
  }
}
