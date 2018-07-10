import {NgbPopover} from '@ng-bootstrap/ng-bootstrap';
import {Component, ViewChild} from '@angular/core';

@Component({
  selector: 'app-ngbd-popover-tplwithcontext',
  templateUrl: './popover-tplwithcontext.html'
})
export class NgbdPopoverTplwithcontextComponent {
  greeting = {};
  name = 'World';

  @ViewChild('p') public popover: NgbPopover;

  public changeGreeting(greeting: any): void {
    const isOpen = this.popover.isOpen();
    this.popover.close();
    if (greeting !== this.greeting || !isOpen) {
      this.greeting = greeting;
      this.popover.open(greeting);
    }
  }
}
