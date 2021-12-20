import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardServComponent } from './card-serv.component';

describe('CardServComponent', () => {
  let component: CardServComponent;
  let fixture: ComponentFixture<CardServComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CardServComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CardServComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
