import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { AdminVolunteersComponent } from './admin-volunteers.component';
import {AppModule} from '../../../app.module';

describe('AdminVolunteersComponent', () => {
  let component: AdminVolunteersComponent;
  let fixture: ComponentFixture<AdminVolunteersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule(
      {imports: [AppModule] }
    )
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminVolunteersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
