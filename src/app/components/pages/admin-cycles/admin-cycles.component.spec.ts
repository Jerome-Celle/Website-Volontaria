import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { AdminCyclesComponent } from './admin-cycles.component';
import {AppModule} from '../../../app.module';

describe('AdminCyclesComponent', () => {
  let component: AdminCyclesComponent;
  let fixture: ComponentFixture<AdminCyclesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule(
      {imports: [AppModule] }
    )
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminCyclesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
