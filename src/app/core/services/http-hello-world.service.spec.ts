import { TestBed } from '@angular/core/testing';

import { HttpHelloWorldService } from './http-hello-world.service';

describe('HttpHelloWorldService', () => {
  let service: HttpHelloWorldService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HttpHelloWorldService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
