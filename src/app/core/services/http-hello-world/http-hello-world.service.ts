import { Injectable } from '@angular/core';
import {map, Observable} from "rxjs";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {LoginComponent} from "../../../features/login/login.component";
import {KeycloakServiceService} from "../keycloak/keycloak-service.service";

@Injectable({
  providedIn: 'root'
})
export class HttpHelloWorldService {

  constructor(private http: HttpClient, private keycloakService: KeycloakServiceService) { }

  getPublicHelloWorld(): Observable<any> {
    return this.http.get<{ message: string }>('http://localhost:8080/public-hello-world')
      .pipe(map(response => response.message));
  }

  getCustomerHelloWorld(): Observable<any> {
    const customerToken = this.keycloakService.getToken()
    return this.http.get<{ message: string }>('http://localhost:8080/customer-hello-world', {headers: new HttpHeaders({'Authorization': `Bearer ${customerToken}`})})
      .pipe(map(response => response.message));
  }

  getAdminHelloWorld(): Observable<any> {
    return this.http.get<{ message: string }>('http://localhost:8080/admin-hello-world')
      .pipe(map(response => response.message));
  }


}
