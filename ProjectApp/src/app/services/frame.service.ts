import { Injectable } from '@angular/core';
import { Frame } from '../frame';
import { FRAMES } from '../mock-frame';
import { Observable, of } from 'rxjs';
import { MessageService } from './message.service';

@Injectable({
  providedIn: 'root'
})

export class FrameService {
  getFrames(): Observable<Frame[]>{
    const frames = of(FRAMES)
    this.messageService.add('returning data');
    return frames;
  }
  constructor(private messageService: MessageService) { }
}
