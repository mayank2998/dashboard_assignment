import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SIdebarComponent } from './sidebar.component';

describe('SIdebarComponent', () => {
  let component: SIdebarComponent;
  let fixture: ComponentFixture<SIdebarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SIdebarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SIdebarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
