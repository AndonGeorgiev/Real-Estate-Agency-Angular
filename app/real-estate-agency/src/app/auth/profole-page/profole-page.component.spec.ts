import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfolePageComponent } from './profole-page.component';

describe('ProfolePageComponent', () => {
  let component: ProfolePageComponent;
  let fixture: ComponentFixture<ProfolePageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProfolePageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfolePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
