import { Injectable } from '@angular/core';
import { Logger } from './logger.model';

@Injectable()
export class ConsoleLogger extends Logger {
  info(message: string): void {
    console.info(message);
  }

  log(message: string): void {
    console.log(message);
  }

}
