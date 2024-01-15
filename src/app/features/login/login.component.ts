import {Component, OnInit} from '@angular/core';
import {ReactiveFormsModule, UntypedFormBuilder, UntypedFormGroup} from "@angular/forms";
import {KeycloakServiceService} from "../../core/services/keycloak/keycloak-service.service";
import {CommonModule} from "@angular/common";

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    CommonModule
  ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent implements OnInit{
  loginForm!: UntypedFormGroup;
  message: string = "";

  constructor(private untypedfb: UntypedFormBuilder, private keycloakService: KeycloakServiceService) {
  }

  ngOnInit(): void {
    this.loginForm = this.untypedfb.group({
      username: '',
      password: ''
    });
  }

  onSubmit(loginData: any) {

    return this.keycloakService.login(loginData).subscribe(

      {next: token => console.log(token), error: console.error});
  }

}
