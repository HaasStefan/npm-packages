import { Component } from '@angular/core';
import { Logger } from 'logger';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'hello-world';

  constructor(
    private readonly logger: Logger
  ) {}

  logMessage() {
    this.logger.log('This is a custom log');
  }
}
