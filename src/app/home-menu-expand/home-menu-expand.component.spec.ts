import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeMenuExpandComponent } from './home-menu-expand.component';

describe('HomeMenuExpandComponent', () => {
  let component: HomeMenuExpandComponent;
  let fixture: ComponentFixture<HomeMenuExpandComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomeMenuExpandComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HomeMenuExpandComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
