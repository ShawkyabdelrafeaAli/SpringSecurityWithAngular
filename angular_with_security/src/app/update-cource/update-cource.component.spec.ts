import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateCourceComponent } from './update-cource.component';

describe('UpdateCourceComponent', () => {
  let component: UpdateCourceComponent;
  let fixture: ComponentFixture<UpdateCourceComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UpdateCourceComponent]
    });
    fixture = TestBed.createComponent(UpdateCourceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
