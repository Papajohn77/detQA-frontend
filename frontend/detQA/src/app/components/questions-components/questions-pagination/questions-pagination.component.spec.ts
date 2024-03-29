import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuestionsPaginationComponent } from './questions-pagination.component';

describe('QuestionsPaginationComponent', () => {
  let component: QuestionsPaginationComponent;
  let fixture: ComponentFixture<QuestionsPaginationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ QuestionsPaginationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(QuestionsPaginationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
