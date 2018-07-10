import {Component} from '@angular/core';
import {NgbTabChangeEvent} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-ngbd-tabset-preventchange',
  templateUrl: './tabset-preventchange.html'
})
export class NgbdTabsetPreventchangeComponent {
    public beforeChange($event: NgbTabChangeEvent) {
      if ($event.nextId === 'tab-preventchange2') {
        $event.preventDefault();
      }
    }
}
