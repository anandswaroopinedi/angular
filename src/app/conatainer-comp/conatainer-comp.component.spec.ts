import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConatainerCompComponent } from './conatainer-comp.component';

describe('ConatainerCompComponent', () => {
  let component: ConatainerCompComponent;
  let fixture: ComponentFixture<ConatainerCompComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ConatainerCompComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ConatainerCompComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
