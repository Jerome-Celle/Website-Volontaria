import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginLayoutComponent } from './login-layout.component';
import {AppModule} from '../../app.module';

describe('LoginLayoutComponent', () => {
  let component: LoginLayoutComponent;
  let fixture: ComponentFixture<LoginLayoutComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule(
      {imports: [AppModule] }
    )
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
