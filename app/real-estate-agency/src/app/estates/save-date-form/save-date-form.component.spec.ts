import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SaveDateFormComponent } from './save-date-form.component';

describe('SaveDateFormComponent', () => {
  let component: SaveDateFormComponent;
  let fixture: ComponentFixture<SaveDateFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SaveDateFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SaveDateFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
