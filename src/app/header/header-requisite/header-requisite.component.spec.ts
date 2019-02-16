import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderRequisiteComponent } from './header-requisite.component';

describe('HeaderRequisiteComponent', () => {
  let component: HeaderRequisiteComponent;
  let fixture: ComponentFixture<HeaderRequisiteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HeaderRequisiteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderRequisiteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
