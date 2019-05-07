import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MatAppComponent } from './mat-app.component';

describe('MatAppComponent', () => {
  let component: MatAppComponent;
  let fixture: ComponentFixture<MatAppComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MatAppComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MatAppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
