import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators'; 

@Injectable({
  providedIn: 'root'
})
export class EmpinfoservService {

  constructor(private http: HttpClient) { }

  fetchFlights():Observable<any>{
    return  this.http.get<any>("https://panorbit.in/api/users.json");
   }


}
