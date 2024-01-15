import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs";
import {KeycloakTokenResponse} from "../../../keycloak-token-response";

@Injectable({
  providedIn: 'root'
})
export class HttpKeycloakService {
  private keycloakEndpoint = 'https://keycloak.switchfully.com/realms/java-2023-10/protocol/openid-connect/token';
  private httpOptions = {

    headers: new HttpHeaders({'Content-Type': 'application/x-www-form-urlencoded'})
  };

  constructor(private http: HttpClient) { }

  login(loginData: any):Observable<KeycloakTokenResponse> {
    const body = new URLSearchParams();
    body.set('username', loginData.username);
    body.set('password', loginData.password);
    body.set('client_id', 'keycloak-example');
    body.set('grant_type', 'password');

    console.log(loginData)
    return this.http.post<any>(this.keycloakEndpoint, body.toString(), this.httpOptions);

  }
}
