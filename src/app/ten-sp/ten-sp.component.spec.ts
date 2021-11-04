import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TenSPComponent } from './ten-sp.component';

describe('TenSPComponent', () => {
  let component: TenSPComponent;
  let fixture: ComponentFixture<TenSPComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TenSPComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TenSPComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
