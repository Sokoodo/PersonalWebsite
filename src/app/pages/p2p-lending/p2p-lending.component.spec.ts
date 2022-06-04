import { ComponentFixture, TestBed } from '@angular/core/testing';

import { P2pLendingComponent } from './p2p-lending.component';

describe('P2pLendingComponent', () => {
  let component: P2pLendingComponent;
  let fixture: ComponentFixture<P2pLendingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ P2pLendingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(P2pLendingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
