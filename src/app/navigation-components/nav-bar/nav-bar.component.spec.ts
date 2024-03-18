import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavBarComponent } from './nav-bar.component';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { provideRouter } from '@angular/router';

describe('NavBarComponent', () => {
  let component: NavBarComponent;
  let fixture: ComponentFixture<NavBarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NavBarComponent, NoopAnimationsModule],
      providers: [provideRouter([])]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(NavBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should toggle sidebar on button click', () => {
    const button = fixture.nativeElement.querySelector('button');
    expect(component.isSideBarOpened).toBeFalse();
    button.click();
    expect(component.isSideBarOpened).toBeTrue();
  });

  it('should render toolbar with correct title', () => {
    const titleElement = fixture.nativeElement.querySelector('span.title');
    expect(titleElement.textContent).toContain('Dashboard');
  });
});
