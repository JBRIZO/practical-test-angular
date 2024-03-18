import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddButtonComponent } from './add-button.component';
import { Section } from '../../interfaces/section.interface';
import { provideRouter } from '@angular/router';

describe('AddButtonComponent', () => {
  let component: AddButtonComponent;
  let fixture: ComponentFixture<AddButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AddButtonComponent],
      providers: [provideRouter([])]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AddButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render the section name in the button', () => {
    const section: Section = { name: 'Test Section', link: 'test' };
    component.section = section;
    fixture.detectChanges();
    const buttonElement: HTMLElement = fixture.nativeElement.querySelector('.button');
    expect(buttonElement.textContent).toContain(section.name);
  });
});
