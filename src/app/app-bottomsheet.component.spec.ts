import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AppBottomsheetComponent } from './app-bottomsheet.component';

describe('AppBottomsheetComponent', () => {
  let component: AppBottomsheetComponent;
  let fixture: ComponentFixture<AppBottomsheetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AppBottomsheetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppBottomsheetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
