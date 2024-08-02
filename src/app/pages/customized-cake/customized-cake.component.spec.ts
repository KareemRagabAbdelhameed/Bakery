import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomizedCakeComponent } from './customized-cake.component';

describe('CustomizedCakeComponent', () => {
  let component: CustomizedCakeComponent;
  let fixture: ComponentFixture<CustomizedCakeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CustomizedCakeComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CustomizedCakeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
