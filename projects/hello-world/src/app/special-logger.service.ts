import { Injectable } from '@angular/core';
import { Logger } from 'logger';

@Injectable()
export class SpecialLogger extends Logger {
  info(message: string): void {
    console.warn(`special log: ${message}`);
  }
  log(message: string): void {
    console.warn(`special log: ${message}`);
  }
}
