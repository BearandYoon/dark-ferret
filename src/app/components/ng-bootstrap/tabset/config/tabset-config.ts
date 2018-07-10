import {Component} from '@angular/core';
import {NgbTabsetConfig} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-ngbd-tabset-config',
  templateUrl: './tabset-config.html',
  providers: [NgbTabsetConfig] // add NgbTabsetConfig to the component providers
})
export class NgbdTabsetConfigComponent {
  constructor(config: NgbTabsetConfig) {
    // customize default values of tabsets used by this component tree
    config.justify = 'center';
    config.type = 'pills';
  }
}
