import {Component, OnInit} from '@angular/core';
import {map, Observable} from "rxjs";
import {AsyncPipe, CommonModule} from "@angular/common";
import {HttpHelloWorldService} from "../../core/services/http-hello-world/http-hello-world.service";
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-hello-world',
  standalone: true,
  imports: [
    CommonModule,
    AsyncPipe
  ],
  templateUrl: './hello-world.component.html',
  styleUrl: './hello-world.component.css'
})
export class HelloWorldComponent implements OnInit{
  $publicHelloWorld: Observable<any> | undefined;
  $customerHelloWorld: Observable<any> | undefined;
  $adminHelloWorld: Observable<any> | undefined;

  constructor(private httpService: HttpHelloWorldService) {

  }

  ngOnInit(): void {
    this.$publicHelloWorld = this.httpService.getPublicHelloWorld();
    this.$customerHelloWorld = this.httpService.getCustomerHelloWorld();
    this.$adminHelloWorld = this.httpService.getAdminHelloWorld();
  }

}
