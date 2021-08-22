import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeletedonationComponent } from './deletedonation.component';

describe('DeletedonationComponent', () => {
  let component: DeletedonationComponent;
  let fixture: ComponentFixture<DeletedonationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeletedonationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DeletedonationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
