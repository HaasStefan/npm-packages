import { Injectable } from '@angular/core';
import { Logger } from './logger.model';

@Injectable()
export class ConsoleLogger extends Logger {
  log(message: string): void {
    console.log(message);
  }
}
