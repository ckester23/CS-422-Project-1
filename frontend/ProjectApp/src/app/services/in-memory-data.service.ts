import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Frame } from '../frames/frame';

@Injectable({
  providedIn: 'root',
})
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const frames = [
      {frameName: "dummyts", framePath: ""},
      {frameName: "dummyts", framePath: ""},
      {frameName: "dummyts", framePath: ""},
      {frameName: "dummyts", framePath: ""},
      {frameName: "dummyts", framePath: ""},
      {frameName: "dummyts", framePath: ""},
      {frameName: "dummyts", framePath: ""}
    ];
    return {frames};
  }
}