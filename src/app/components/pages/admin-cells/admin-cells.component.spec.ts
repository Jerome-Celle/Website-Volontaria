import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { AdminCellsComponent } from './admin-cells.component';
import { AppModule } from '../../../app.module';

describe('AdminCellsComponent', () => {
  let component: AdminCellsComponent;
  let fixture: ComponentFixture<AdminCellsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule(
      {imports: [AppModule] }
    )
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminCellsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
