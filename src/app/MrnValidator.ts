import { Injectable } from "@angular/core";
import { AsyncValidator, AbstractControl, ValidationErrors } from "@angular/forms";
import { catchError, map, Observable, of, tap } from "rxjs";

import { HttpClient } from '@angular/common/http';

export interface Resp { message: string }

@Injectable({ providedIn: 'root' })
export class MRNService {
  constructor(private http: HttpClient) { }

  checkMrn(mrn: string): Observable<Resp> {
    return this.http.get<Resp>('http://localhost:8074');
  }

}

@Injectable({ providedIn: 'root' })
export class UniqueMRNValidator implements AsyncValidator {
    constructor(private http: MRNService) { }

    validate(ctrl: AbstractControl): Observable<ValidationErrors | null> {
        return this.http
            .checkMrn(ctrl.value)
            .pipe(
                // tap(v => console.log(v)),
                map(
                    () => (ctrl.value.toLowerCase() === 'kwaku' ? // Set the expected http response inside the quote
                    { unqMrn: true } 
                    : null)
                    ),
                catchError(() => of(null))
            );
    }
} 