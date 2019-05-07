import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MatAppBarComponent } from './mat-app-bar.component';

describe('MatAppBarComponent', () => {
  let component: MatAppBarComponent;
  let fixture: ComponentFixture<MatAppBarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MatAppBarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MatAppBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
