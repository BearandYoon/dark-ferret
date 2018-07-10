import {Component} from '@angular/core';
import {NgbTimeStruct} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-ngbd-timepicker-seconds',
  templateUrl: './timepicker-seconds.html'
})
export class NgbdTimepickerSecondsComponent {
  time: NgbTimeStruct = {hour: 13, minute: 30, second: 30};
  seconds = true;

  toggleSeconds() {
    this.seconds = !this.seconds;
  }
}
