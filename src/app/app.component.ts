import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { UniqueMRNValidator } from './MrnValidator';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'unique-comps';
  form: FormGroup
  constructor(private val: UniqueMRNValidator) {
    const uname = new FormControl('', {
      asyncValidators: [this.val.validate.bind(this.val)],
      updateOn: 'blur'
    });
    this.form = new FormGroup({ uname })
  }

  save() {
    console.log(this.form.get('uname'));
  }
}