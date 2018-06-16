import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { AdminCellComponent } from './admin-cell.component';
import {OwlDateTimeIntl, OwlDateTimeModule, OwlNativeDateTimeModule} from 'ng-pick-datetime';
import {PermissionDirective} from '../../../directives/permission.directive';
import {LoginPageComponent} from '../login-page/login-page.component';
import {CellService} from '../../../services/cell.service';
import {DocumentationComponent} from '../documentation/documentation.component';
import {ManageAccountPageComponent} from '../manage-account-page/manage-account-page.component';
import {LoginLayoutComponent} from '../../../layouts/login-layout/login-layout.component';
import {HeaderComponent} from '../../header/header.component';
import {ContactPageComponent} from '../contact-page/contact-page.component';
import {TasktypeService} from '../../../services/tasktype.service';
import {RouterModule} from '@angular/router';
import {AuthenticationService} from '../../../services/authentication.service';
import {CanAccessAdminPanelGuard} from '../../../guards/CanAccessAdminPanelGuard';
import {AdminLayoutComponent} from '../../../layouts/admin-layout/admin-layout.component';
import {BrowserModule} from '@angular/platform-browser';
import {ActivityConfirmationComponent} from '../activities-page/activity-confirmation-page/activity-confirmation-page.component';
import {RegisterValidationComponent} from '../register-validation/register-validation.component';
import {FooterComponent} from '../../footer/footer.component';
import {AdminEventComponent} from '../admin-event/admin-event.component';
import {CycleService} from '../../../services/cycle.service';
import {AdminActivityDetailComponent} from '../admin-activity-detail/admin-activity-detail.component';
import {MyHttpInterceptor} from '../../../my-http-interceptor';
import {DefaultLayoutComponent} from '../../../layouts/default-layout/default-layout.component';
import {ForgotPasswordConfirmationComponent} from '../forgot-password-confirmation/forgot-password-confirmation.component';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MyModalOpenDirective} from '../../../directives/my-modal-open.directive';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {AdminComponent} from '../admin/admin.component';
import {ParticipationService} from '../../../services/participation.service';
import {CalendarModule} from 'angular-calendar';
import {MyTableComponent} from '../../my-table/my-table.component';
import {ResetPasswordComponent} from '../reset-password/reset-password.component';
import {AdminCyclesComponent} from '../admin-cycles/admin-cycles.component';
import {MyBenevolometreComponent} from '../../my-benevolometre/my-benevolometre.component';
import {DefaultIntl} from '../../../app.module';
import {EventService} from '../../../services/event.service';
import {InfoPageComponent} from '../info-page/info-page.component';
import {UserService} from '../../../services/user.service';
import {RegisterActivationComponent} from '../register-activation/register-activation.component';
import {AdminVolunteersComponent} from '../admin-volunteers/admin-volunteers.component';
import {LogoutPageComponent} from '../logout-page/logout-page.component';
import {ActivitiesPageComponent} from '../activities-page/activities-page.component';
import {AdminActivitiesComponent} from '../admin-activities/admin-activities.component';
import {MyModalService} from '../../../services/my-modal/my-modal.service';
import {ForgotPasswordComponent} from '../forgot-password/forgot-password.component';
import {AppComponent} from '../../../app.component';
import {PageNotFoundComponent} from '../notfound-page/notfound-page.component';
import {SimpleNotificationsModule} from 'angular2-notifications';
import {AdminCellsComponent} from '../admin-cells/admin-cells.component';
import {MySchedulePageComponent} from '../myschedule-page/myschedule-page.component';
import {CanActivateViaAuthGuard} from '../../../guards/CanActivateViaAuthGuard';
import {HomePageComponent} from '../home-page/home-page.component';
import {MyModalComponent} from '../../my-modal/my-modal.component';

describe('MyScheduleComponent', () => {
  let component: AdminCellComponent;
  let fixture: ComponentFixture<AdminCellComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent,
        FooterComponent,
        HeaderComponent,
        HomePageComponent,
        MySchedulePageComponent,
        ActivitiesPageComponent,
        ManageAccountPageComponent,
        RegisterValidationComponent,
        RegisterActivationComponent,
        LoginPageComponent,
        LogoutPageComponent,
        ActivityConfirmationComponent,
        AdminVolunteersComponent,
        AdminCyclesComponent,
        AdminCellsComponent,
        AdminCellComponent,
        AdminEventComponent,
        AdminActivitiesComponent,
        AdminActivityDetailComponent,
        InfoPageComponent,
        ContactPageComponent,
        DocumentationComponent,
        PageNotFoundComponent,
        AdminLayoutComponent,
        DefaultLayoutComponent,
        LoginLayoutComponent,
        PermissionDirective,
        AdminComponent,
        MyModalOpenDirective,
        MyModalComponent,
        MyTableComponent,
        ForgotPasswordComponent,
        ForgotPasswordConfirmationComponent,
        ResetPasswordComponent,
        MyBenevolometreComponent
      ],
      imports: [
        BrowserModule,
        BrowserAnimationsModule,
        RouterModule,
        HttpClientModule,
        FormsModule,
        ReactiveFormsModule,
        SimpleNotificationsModule.forRoot(),
        //AngularMultiSelectModule,
        OwlDateTimeModule,
        OwlNativeDateTimeModule,
        CalendarModule.forRoot()
      ],
      providers: [
        UserService,
        AuthenticationService,
        EventService,
        TasktypeService,
        CycleService,
        CellService,
        ParticipationService,
        CanActivateViaAuthGuard,
        CanAccessAdminPanelGuard,
        {
          provide: HTTP_INTERCEPTORS,
          useClass: MyHttpInterceptor,
          multi: true,
        },
        {provide: OwlDateTimeIntl, useClass: DefaultIntl},
        MyModalService
      ],
    })
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
