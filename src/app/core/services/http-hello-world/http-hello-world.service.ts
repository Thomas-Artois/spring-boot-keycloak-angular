import { Injectable } from '@angular/core';
import {map, Observable} from "rxjs";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class HttpHelloWorldService {

  constructor(private http: HttpClient) { }

  getPublicHelloWorld(): Observable<any> {
    return this.http.get<{ message: string }>('http://localhost:8080/public-hello-world')
      .pipe(map(response => JSON.stringify(response.message)));
  }

  getCustomerHelloWorld(): Observable<any> {
    return this.http.get<{ message: string }>('http://localhost:8080/customer-hello-world')
      .pipe(map(response => JSON.stringify(response.message)));
  }

  getAdminHelloWorld(): Observable<any> {
    return this.http.get<{ message: string }>('http://localhost:8080/admin-hello-world')
      .pipe(map(response => JSON.stringify(response.message)));
  }


}
