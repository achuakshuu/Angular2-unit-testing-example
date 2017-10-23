import { TestBed, async, ComponentFixture, fakeAsync, tick,inject } from '@angular/core/testing';
import { By, BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { DebugElement } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Router, RouterOutlet,ActivatedRoute } from "@angular/router";
import { FormsModule } from "@angular/forms";
import { RouterTestingModule } from '@angular/router/testing';
import * as br from '@angular/platform-browser';

describe('AppComponent', () => {

  let component: AppComponent;
  let fixture: ComponentFixture<AppComponent>;
  let debugElement: DebugElement;
 
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [FormsModule,
        RouterTestingModule
      ],
      declarations: [
        AppComponent
      ]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppComponent);
    component = fixture.componentInstance;
    debugElement = fixture.debugElement;
  });
  
  it('should create the app', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));

  it(`should have as title 'app'`, async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual('app');
  }));


  it('should render email field validation', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const input = fixture.debugElement.query(By.css('#email'));
    expect(input.attributes.value).toEqual('hello');
  }));


  it('should render form submit', () => {


    spyOn(component, 'login');
    // first round of change detection
    fixture.detectChanges();

    const input1 = fixture.debugElement.query(By.css('#email')).nativeElement;
    input1.value = 'hello';
    input1.dispatchEvent(new Event('input'));

    const submit = fixture.debugElement.query(By.css('#subm')).nativeElement;
    submit.click();
    submit.dispatchEvent(new Event('click'));
    fixture.whenStable().then(() => {
      expect(component.login).toHaveBeenCalled();
    })

  });
 
});
describe('Component:AppComponent', () => {
  let component: AppComponent;
  let fixture: ComponentFixture<AppComponent>;
  let debugElement: DebugElement;
  let location, router: Router;
  let mockRouter;
 
  beforeEach(() => {
    mockRouter = {
      navigate: jasmine.createSpy('navigate')
    };
    TestBed.configureTestingModule({
      imports: [RouterTestingModule.withRoutes([
        { path: 'home', component: HomeComponent }
      ])],
      declarations: [AppComponent, HomeComponent],
      providers: [
        { provide: Router, useValue: mockRouter},
     ]
    });
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AppComponent);
    component = fixture.componentInstance;
    debugElement = fixture.debugElement;
  });
  


  it('should go home', async(() => {
        fixture.detectChanges();
        component.nav();
        expect(mockRouter.navigate).toHaveBeenCalledWith(['/home']);   
  }));
});
