import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FishItemOneComponent } from './fish-item-one.component';

describe('FishItemOneComponent', () => {
  let component: FishItemOneComponent;
  let fixture: ComponentFixture<FishItemOneComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FishItemOneComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FishItemOneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
