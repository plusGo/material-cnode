import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MatAppBodyComponent } from './mat-app-body.component';

describe('MatAppBodyComponent', () => {
  let component: MatAppBodyComponent;
  let fixture: ComponentFixture<MatAppBodyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MatAppBodyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MatAppBodyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
