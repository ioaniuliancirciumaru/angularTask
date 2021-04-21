import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
// import 'rxjs/add/operator/map';
// import 'rxjs/add/operator/toPromise';

import { Patient } from './patient.model';

@Injectable({
  providedIn: 'root'
})
export class PatientService {
  selectedPatient: Patient;
  patient: Patient[];
  readonly baseURL = 'http://localhost:3000/patients';

  constructor(public http: HttpClient) { }

  postPatient(pat: Patient) {
    return this.http.post(this.baseURL, pat);
  } 

  getPatientList() {
    return this.http.get(this.baseURL);
  }

  putPatient(pat: Patient) {
    return this.http.put(this.baseURL + `/${pat._id}`, pat);
  }

  deletePatient(_id: string) {
    return this.http.delete(this.baseURL + `/${_id}`);
  }
}
