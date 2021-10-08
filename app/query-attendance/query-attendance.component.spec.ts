import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QueryAttendanceComponent } from './query-attendance.component';

describe('QueryAttendanceComponent', () => {
  let component: QueryAttendanceComponent;
  let fixture: ComponentFixture<QueryAttendanceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ QueryAttendanceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(QueryAttendanceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
