import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QualityOfLifeComponent } from './quality-of-life.component';

describe('QualityOfLifeComponent', () => {
  let component: QualityOfLifeComponent;
  let fixture: ComponentFixture<QualityOfLifeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ QualityOfLifeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(QualityOfLifeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
