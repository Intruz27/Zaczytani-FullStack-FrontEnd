import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeeAddComponent } from './book-add.component';

describe('AddEmployeeComponent', () => {
  let component: EmployeeAddComponent;
  let fixture: ComponentFixture<EmployeeAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EmployeeAddComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EmployeeAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
