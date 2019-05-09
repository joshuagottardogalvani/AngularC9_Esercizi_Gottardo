import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaBraniComponent } from './lista-brani.component';

describe('ListaBraniComponent', () => {
  let component: ListaBraniComponent;
  let fixture: ComponentFixture<ListaBraniComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListaBraniComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListaBraniComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
