import {Component} from '@angular/core';
import {NgbPaginationConfig} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-ngbd-pagination-config',
  templateUrl: './pagination-config.html',
  providers: [NgbPaginationConfig] // add NgbPaginationConfig to the component providers
})
export class NgbdPaginationConfigComponent {
  page = 4;

  constructor(config: NgbPaginationConfig) {
    // customize default values of paginations used by this component tree
    config.size = 'sm';
    config.boundaryLinks = true;
  }
}
