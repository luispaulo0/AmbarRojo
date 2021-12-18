import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardsPortafoliosComponent } from './cards-portafolios.component';

describe('CardsPortafoliosComponent', () => {
  let component: CardsPortafoliosComponent;
  let fixture: ComponentFixture<CardsPortafoliosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CardsPortafoliosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CardsPortafoliosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
