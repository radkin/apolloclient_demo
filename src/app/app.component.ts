import { Component } from '@angular/core';
import { NGXLogger } from 'ngx-logger';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'apolloclient-demo';
  constructor(private logger: NGXLogger) {
    this.logger.debug('Debug message');
    this.logger.info('Info message');
    // this.logger.log('Default log message');
    // this.logger.warn('Warning message');
    // this.logger.error('Error message');
  }
  // Use this to test the global error handler
  /*
  constructor() {
    throw new Error('Required');
  }
  */
}
