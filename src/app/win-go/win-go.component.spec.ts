import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WinGoComponent } from './win-go.component';

describe('WinGoComponent', () => {
  let component: WinGoComponent;
  let fixture: ComponentFixture<WinGoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WinGoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WinGoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
