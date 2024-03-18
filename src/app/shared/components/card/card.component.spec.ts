import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardComponent } from './card.component';
import { DebugElement } from '@angular/core';
import { By } from '@angular/platform-browser';

describe('CardComponent', () => {
  let component: CardComponent;
  let fixture: ComponentFixture<CardComponent>;
  let element: DebugElement;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CardComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CardComponent);
    element = fixture.debugElement;
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render card, and all card elements', () => {
    const card = element.query(By.css('.card'));

    expect(card).withContext('should render card element').toBeTruthy();
    const cardHeader = card.query(By.css('.card-header'));

    expect(cardHeader).withContext('should render card header inside card').toBeTruthy();
    const cardContent = card.query(By.css('.card-content'));

    expect(cardContent).withContext('should render the card content inside the card').toBeTruthy();
  });
});
