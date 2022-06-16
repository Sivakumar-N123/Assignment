import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MultiuploaderComponent } from './multiuploader.component';

describe('MultiuploaderComponent', () => {
  let component: MultiuploaderComponent;
  let fixture: ComponentFixture<MultiuploaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MultiuploaderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MultiuploaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
