import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({ providedIn: 'root' })
export class MRNService {
  constructor(private http: HttpClient) { }

  checkMrn(mrn: string): Observable<Resp> {
    return this.http.get<Resp>('http://localhost:8074');
  }

}

import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { UniqueMRNValidator } from './MrnValidator';
import { Observable } from 'rxjs';

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
    console.log(this.form);
  }
}

export interface Resp { message: string }