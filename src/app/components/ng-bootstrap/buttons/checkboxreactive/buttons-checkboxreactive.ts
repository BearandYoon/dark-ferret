import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-ngbd-buttons-checkboxreactive',
  templateUrl: './buttons-checkboxreactive.html'
})
export class NgbdButtonsCheckboxreactiveComponent implements OnInit {
  public checkboxGroupForm: FormGroup;

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit() {
    this.checkboxGroupForm = this.formBuilder.group({
      left: true,
      middle: false,
      right: false
    });
  }
}
