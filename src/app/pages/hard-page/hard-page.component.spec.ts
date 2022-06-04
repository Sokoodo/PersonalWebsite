import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HardPageComponent } from './hard-page.component';

describe('HardPageComponent', () => {
  let component: HardPageComponent;
  let fixture: ComponentFixture<HardPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HardPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HardPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
