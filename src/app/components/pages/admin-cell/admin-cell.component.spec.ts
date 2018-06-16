import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { AdminCellComponent } from './admin-cell.component';
import {AppModule} from '../../../app.module';

describe('AdminCellComponent', () => {
  let component: AdminCellComponent;
  let fixture: ComponentFixture<AdminCellComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule(
      {imports: [AppModule] }
    )
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminCellComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
