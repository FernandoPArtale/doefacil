import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewCauseComponent } from './view-cause.component';

describe('ViewCauseComponent', () => {
  let component: ViewCauseComponent;
  let fixture: ComponentFixture<ViewCauseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewCauseComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewCauseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
