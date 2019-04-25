import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewPrenotazioniComponent } from './view-prenotazioni.component';

describe('ViewPrenotazioniComponent', () => {
  let component: ViewPrenotazioniComponent;
  let fixture: ComponentFixture<ViewPrenotazioniComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewPrenotazioniComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewPrenotazioniComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
