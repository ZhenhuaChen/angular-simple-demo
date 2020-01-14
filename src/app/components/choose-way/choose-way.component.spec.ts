import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChooseWayComponent } from './choose-way.component';

describe('ChooseWayComponent', () => {
  let component: ChooseWayComponent;
  let fixture: ComponentFixture<ChooseWayComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChooseWayComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChooseWayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
