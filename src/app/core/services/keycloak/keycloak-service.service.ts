import { Injectable } from '@angular/core';
import {HttpKeycloakService} from "../http-keycloak/http-keycloak.service";
import {Observable, tap} from "rxjs";
import {KeycloakTokenResponse} from "../../../keycloak-token-response";
import {log} from "@angular-devkit/build-angular/src/builders/ssr-dev-server";

@Injectable({
  providedIn: 'root'
})


export class KeycloakServiceService {
  readonly TOKEN_KEY_NAME = 'access_token';

  constructor(private httpKeycloakService: HttpKeycloakService) { }

  login(loginData: any): Observable<KeycloakTokenResponse> {
    return this.httpKeycloakService.login(loginData)
      .pipe(tap(response => this.setToken(response.access_token)));
  }

  private setToken(accessToken: string): void {
    sessionStorage.setItem(this.TOKEN_KEY_NAME, accessToken);
  }

  getToken() {
    return sessionStorage.getItem(this.TOKEN_KEY_NAME);
  }

  private isLoggedIn() {
    return !!this.getToken();
  }

  private logout() {
    return sessionStorage.removeItem(this.TOKEN_KEY_NAME);
  }






}
