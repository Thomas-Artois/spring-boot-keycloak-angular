import {Component, OnInit} from '@angular/core';
import {UntypedFormBuilder, UntypedFormGroup} from "@angular/forms";

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [],
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

}
