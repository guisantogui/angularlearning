import { TestBed } from '@angular/core/testing';

import { ListrenderserviceService } from './listrenderservice.service';


describe('ListrenderserviceService', () => {
  let service: ListrenderserviceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ListrenderserviceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

