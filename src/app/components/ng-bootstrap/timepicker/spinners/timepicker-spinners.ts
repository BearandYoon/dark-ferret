import {Component} from '@angular/core';

@Component({
  selector: 'app-ngbd-timepicker-spinners',
  templateUrl: './timepicker-spinners.html'
})
export class NgbdTimepickerSpinnersComponent {
  time = {hour: 13, minute: 30};
  spinners = true;

  toggleSpinners() {
      this.spinners = !this.spinners;
  }
}
