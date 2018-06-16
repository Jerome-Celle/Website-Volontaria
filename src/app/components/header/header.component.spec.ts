import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { PermissionDirective } from '../../directives/permission.directive';

import { HeaderComponent } from './header.component';
import {UserService} from '../../services/user.service';
import {AuthenticationService} from '../../services/authentication.service';
import {HttpClientModule} from '@angular/common/http';

describe('HeaderComponent', () => {
  let component: HeaderComponent;
  let fixture: ComponentFixture<HeaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HeaderComponent,
        PermissionDirective,
      ],
      imports: [
        HttpClientModule,
      ],
      providers: [
        AuthenticationService,
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
