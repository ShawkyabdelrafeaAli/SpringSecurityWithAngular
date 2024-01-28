import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateCourceComponent } from './create-cource.component';

describe('CreateCourceComponent', () => {
  let component: CreateCourceComponent;
  let fixture: ComponentFixture<CreateCourceComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CreateCourceComponent]
    });
    fixture = TestBed.createComponent(CreateCourceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
