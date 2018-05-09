import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import {CellService} from '../../../services/cell.service';
import {Cell} from '../../../models/cell';
import {Router} from '@angular/router';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {NotificationsService} from 'angular2-notifications';
import {AuthenticationService} from '../../../services/authentication.service';
import {MyModalService} from '../../../services/my-modal/my-modal.service';
import {AddressService} from '../../../services/address.service';
import {Address} from '../../../models/address';


@Component({
  selector: 'app-admin-cells',
  templateUrl: './admin-cells.component.html',
  styleUrls: ['admin-cells.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class AdminCellsComponent implements OnInit {

  cells: Cell[];

  cellForm: FormGroup;
  addresses: Address[];

  constructor(private cellService: CellService,
              private router: Router,
              private notificationService: NotificationsService,
              private formBuilder: FormBuilder,
              private authenticationService: AuthenticationService,
              private myModals: MyModalService,
              private addressService: AddressService) {
  }

  ngOnInit() {
    this.getCells();
    this.createForm();
  }

  visitCell(idCell) {
    this.router.navigate(['/admin/cells/' + idCell]);
  }

  getCells() {
    this.cellService.getCells().subscribe(
      data => {
        this.cells = data.results.map(c => new Cell(c));
      }
    );
  }

  createForm() {

    this.getAddress();
    this.cellForm = this.formBuilder.group(
      {
        name: [null, Validators.required],
        address: [null, Validators.required]
      }
    );
  }

  getAddress(): void {
    this.addressService.getAddresses()
      .subscribe(addresses => {
        this.addresses = addresses.results;
        console.log(this.addresses);
      });
  }

  createCell() {
    if (this.cellForm.valid) {

      this.cellService.createCell(this.cellForm.value).subscribe(
        data => {
          this.myModals.get('create cell').toggle();
          this.cellForm.reset();
          this.notificationService.success('Création réussie',
            `La cellule "${data.name}" a été créé`);

          this.getCells();
        },
        err => {

          console.log(err);

          let errorMessage = '';
          if (err.error.name) {
            errorMessage += `name erreur: ${err.error.name[0]},`;
          }
          if (err.error.address) {
            errorMessage += `address erreur: ${err.error.address[0]},`;
          }

          this.myModals.get('create cell').setErrorMessage(errorMessage);
        }
      );
    }
  }
}
