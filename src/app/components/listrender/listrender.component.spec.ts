import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListrenderComponent } from './listrender.component';

describe('ListrenderComponent', () => {
  let component: ListrenderComponent;
  let fixture: ComponentFixture<ListrenderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListrenderComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListrenderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
