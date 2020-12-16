import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OtramasComponent } from './otramas.component';

describe('OtramasComponent', () => {
  let component: OtramasComponent;
  let fixture: ComponentFixture<OtramasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OtramasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OtramasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
