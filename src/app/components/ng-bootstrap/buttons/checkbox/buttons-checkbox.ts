import {Component} from '@angular/core';

@Component({
  selector: 'app-ngbd-buttons-checkbox',
  templateUrl: './buttons-checkbox.html'
})
export class NgbdButtonsCheckboxComponent {
  model = {
    left: true,
    middle: false,
    right: false
  };
}
