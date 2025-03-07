import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GelatoComponent } from './gelato.component';

describe('GelatoComponent', () => {
  let component: GelatoComponent;
  let fixture: ComponentFixture<GelatoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GelatoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GelatoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
