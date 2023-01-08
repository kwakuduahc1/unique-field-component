import { Injectable } from "@angular/core";
import { AsyncValidator, AbstractControl, ValidationErrors } from "@angular/forms";
import { catchError, map, Observable, of, tap } from "rxjs";
import { MRNService } from "./app.component";

@Injectable({ providedIn: 'root' })
export class UniqueMRNValidator implements AsyncValidator {
    constructor(private http: MRNService) { }

    validate(control: AbstractControl): Observable<ValidationErrors | null> {
        return this.http
            .checkMrn(control.value)
            .pipe(
                tap(v => console.log(v)),
                map(mrn => (mrn.message === 'bStudio Accounting' ? { unqMrn: true } : null)),
                catchError(() => of(null))
            );
    }
} 