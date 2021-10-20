import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddProjectDialogeComponent } from './add-project-dialoge.component';

describe('AddProjectDialogeComponent', () => {
  let component: AddProjectDialogeComponent;
  let fixture: ComponentFixture<AddProjectDialogeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddProjectDialogeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddProjectDialogeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
