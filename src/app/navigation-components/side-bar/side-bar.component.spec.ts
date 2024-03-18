import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { provideRouter } from '@angular/router';
import { SideBarComponent } from './side-bar.component';

describe('SideBarComponent', () => {
  let component: SideBarComponent;
  let fixture: ComponentFixture<SideBarComponent>;

  beforeEach(async () => {
    const userServiceSpy = jasmine.createSpyObj('UserService', ['getUser']);
    await TestBed.configureTestingModule({
      imports: [SideBarComponent, NoopAnimationsModule],
      providers: [provideRouter([])]
    })
    .compileComponents();
    fixture = TestBed.createComponent(SideBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should handle initial values correctly', () => {
    expect(component.isSideBarOpened).toBeTrue();
    expect(component.userInfo).toBeUndefined();
    expect(component.errorMessage).toBeUndefined();
    expect(component.isLoading).toBeTruthy();
    expect(component.sections).toBeDefined();
  });

  it('should call getUserInfo on ngOnInit', () => {
    spyOn(component, 'getUserInfo');
    component.ngOnInit();
    expect(component.getUserInfo).toHaveBeenCalled();
  });

  it('should set isLoading to true when getUserInfo is called', () => {
    component.getUserInfo();
    expect(component.isLoading).toBeTrue();
  });
});
