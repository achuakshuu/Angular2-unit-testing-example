import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeComponent } from './home.component';

describe('HomeComponent', () => {
  let component1: HomeComponent;
  let fixture1: ComponentFixture<HomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture1 = TestBed.createComponent(HomeComponent);
    component1 = fixture1.componentInstance;
    fixture1.detectChanges();
  });

  it('should be created', () => {
    expect(component1).toBeTruthy();
  });
});
