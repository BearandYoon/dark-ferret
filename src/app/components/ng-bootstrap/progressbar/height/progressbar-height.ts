import {Component} from '@angular/core';

@Component({
  selector: 'app-ngbd-progressbar-height',
  templateUrl: './progressbar-height.html',
  styles: [`
    ngb-progressbar {
      margin-top: 5rem;
    }
  `]
})
export class NgbdProgressbarHeightComponent {
  height = '20px';
}
