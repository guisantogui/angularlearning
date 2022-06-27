import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IfrenderComponent } from './ifrender.component';

describe('IfrenderComponent', () => {
  let component: IfrenderComponent;
  let fixture: ComponentFixture<IfrenderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IfrenderComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IfrenderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
