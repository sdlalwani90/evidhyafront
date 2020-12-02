import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewBatchesComponent } from './new-batches.component';

describe('NewBatchesComponent', () => {
  let component: NewBatchesComponent;
  let fixture: ComponentFixture<NewBatchesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewBatchesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewBatchesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
