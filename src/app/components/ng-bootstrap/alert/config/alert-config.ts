import {Component, Input} from '@angular/core';
import {NgbAlertConfig} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-ngbd-alert-config',
  templateUrl: './alert-config.html',
  // add NgbAlertConfig  to the component providers
  providers: [NgbAlertConfig]
})
export class NgbdAlertConfigComponent {
  @Input() public alerts: Array<string> = [];

  constructor(alertConfig: NgbAlertConfig) {
    // customize default values of alerts used by this component tree
    alertConfig.type = 'success';
    alertConfig.dismissible = false;
  }
}
