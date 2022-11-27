import { ModuleWithProviders, NgModule, Type } from '@angular/core';
import { ConsoleLogger } from './console-logger.service';
import { Logger } from './logger.model';


@NgModule({
  declarations: [
  ],
  imports: [
  ],
  exports: [
  ]
})
export class LoggerModule {
  static forRoot(config?: { logger: Type<any> }): ModuleWithProviders<LoggerModule> {
    return {
      ngModule: LoggerModule,
      providers: [
        { provide: Logger, useClass: config?.logger ?? ConsoleLogger }
      ]
    };
  }
 }

