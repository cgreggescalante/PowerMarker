import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActivityListEntryComponent } from './activity-list-entry.component';

describe('ActivityListEntryComponent', () => {
  let component: ActivityListEntryComponent;
  let fixture: ComponentFixture<ActivityListEntryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ActivityListEntryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ActivityListEntryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
