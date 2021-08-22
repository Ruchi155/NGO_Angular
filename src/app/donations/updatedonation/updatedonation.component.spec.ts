import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdatedonationComponent } from './updatedonation.component';

describe('UpdatedonationComponent', () => {
  let component: UpdatedonationComponent;
  let fixture: ComponentFixture<UpdatedonationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdatedonationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdatedonationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
