import {Component, OnInit} from '@angular/core';
import {ReactiveFormsModule, UntypedFormBuilder, UntypedFormGroup} from "@angular/forms";

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    ReactiveFormsModule
  ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent implements OnInit{
  loginForm!: UntypedFormGroup;

  constructor(private untypedfb: UntypedFormBuilder) {
  }

  ngOnInit(): void {
    this.loginForm = this.untypedfb.group({
      username: '',
      password: ''
    });
  }

  onSubmit(loginData: any) {
    return this.keycloakService.login(loginData).subscribe({error: console.error});;
  }

}
