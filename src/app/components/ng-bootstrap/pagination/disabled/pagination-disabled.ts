import {Component} from '@angular/core';
import {NgbPaginationConfig} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-ngbd-pagination-disabled',
  templateUrl: './pagination-disabled.html'
})
export class NgbdPaginationDisabledComponent {
  page = 3;
  isDisabled = true;

  toggleDisabled() {
    this.isDisabled = !this.isDisabled;
  }
}
