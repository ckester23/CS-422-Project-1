import { Injectable } from '@angular/core';
import { Frame } from '../frame';
import { FRAMES } from '../mock-frame';

@Injectable({
  providedIn: 'root'
})

export class FrameService {
  getFrames(): Frame[] {
    return FRAMES;
  }
  constructor() { }
}
