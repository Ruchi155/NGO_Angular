import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PagenotFoundComponentComponent } from './pagenot-found-component.component';

describe('PagenotFoundComponentComponent', () => {
  let component: PagenotFoundComponentComponent;
  let fixture: ComponentFixture<PagenotFoundComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PagenotFoundComponentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PagenotFoundComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
