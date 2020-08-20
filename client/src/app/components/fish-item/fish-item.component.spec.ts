import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FishItemComponent } from './fish-item.component';

describe('FishItemComponent', () => {
  let component: FishItemComponent;
  let fixture: ComponentFixture<FishItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FishItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FishItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
