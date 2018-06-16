import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { AdminEventComponent } from './admin-event.component';
import {AppModule} from '../../../app.module';

describe('AdminEventComponent', () => {
  let component: AdminEventComponent;
  let fixture: ComponentFixture<AdminEventComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule(
      {imports: [AppModule] }
    )
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminEventComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
