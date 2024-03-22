import { Component, OnInit } from '@angular/core';
import {  FormBuilder, FormControl, Validators } from '@angular/forms';
import { NavController } from '@ionic/angular';
import { DocumenTypeService } from '../services/documen-type.service';
import { MAT_DATE_FORMATS } from '@angular/material/core';

export const MY_DATA_FORMATS = {
  parse: {
    dateInput: 'DD/MM/YYYY',
  },
  display: {
    dateInput: 'DD/MM/YYYY',
    monthYearLabel: 'MMMM YYYY',
  },
};
@Component({
  selector: 'app-accountdata',
  templateUrl: './accountdata.page.html',
  styleUrls: ['./accountdata.page.scss'],
  providers: [{ provide: MAT_DATE_FORMATS, useValue: MY_DATA_FORMATS }],
})
export class AccountdataPage implements OnInit {
  loading: boolean = false;
  currentNumber: number = 1;
  isEmailConfirmed: boolean = false;
  typeDocument: any[] = [];
  selecteDocument: any;
  hidePassword: boolean = true;
  hidePasswordconf: boolean= true

  dataccount = this._formBuilder.group({
    tipoDocumento: ["", Validators.required],
    numeroDocumento: ["", [Validators.required, Validators.minLength(8)]],
    fechaExpedicion: ["", [Validators.required, this.validateDate]],
    fechaNacimiento: ["", [Validators.required, this.validateDate]],
    genero: ["", Validators.required],
    correoElectronico: ["", [Validators.required, Validators.email]],
    confirmarCorreo: ["", Validators.required],
    password: ["", [Validators.required, Validators.minLength(4)]],
    confirmarPassword: ["", [Validators.required,  Validators.minLength(4)]]
  });

  constructor( private _formBuilder: FormBuilder,
    private navCtrl: NavController,
    private documentService: DocumenTypeService) { }

  ngOnInit() {
    this.documentService.typeDocument().subscribe({
      next: data => {
        this.typeDocument = data;
      },
      error: error => console.error(error)
    });

    this.setupPasswordValidation();
    this.setupEmailValidation();

  }
  validateDate(control: FormControl): { [key: string]: any } | null {
    if (isNaN(Date.parse(control.value))) {
      return { 'invalidDate': true };
    }
    return null;
  }

  setExpeditionDate() {
    const fechaExpedicionControl = this.dataccount.get('fechaExpedicion');
    if (fechaExpedicionControl) {
      fechaExpedicionControl.setValue(null); // Aquí se asigna null en lugar de currentDate
    }
  }

  nextSubmit() {
    this.loading = true;
    console.log(this.loading);
    if (this.dataccount.valid) {
      this.currentNumber++;
      setTimeout(() => {
        console.log('esperando 2 segundos...');
        this.navCtrl.navigateForward("/contract");
        this.loading = false;
        console.log(this.loading);
      }, 2000);
    } else {
      console.log("Invalid form submission");
    }
  }
  togglePasswordVisibility() {
    this.hidePassword = !this.hidePassword;
  }
  passwordVisibility() {
    this.hidePasswordconf = !this.hidePasswordconf;
  }

  setupEmailValidation() {
    const emailControl = this.dataccount.get('correoElectronico');
    const confirmarEmailControl = this.dataccount.get('confirmarCorreo');

    if (emailControl && confirmarEmailControl) {
      emailControl.valueChanges.subscribe(() => {
        const emailValue = emailControl.value;
        if (emailValue) {
          confirmarEmailControl.setValidators([
            Validators.required,
            Validators.email,
            Validators.pattern(emailValue),
            Validators.minLength(4),
          ]);
          confirmarEmailControl.updateValueAndValidity();
          this.checkEmailConfirmation();
        }
      });
    }
  }
  checkEmailConfirmation() {
    const emailControl = this.dataccount.get('correoElectronico');
    const confirmarEmailControl = this.dataccount.get('confirmarCorreo');

    if (emailControl && confirmarEmailControl) {
      if (emailControl.value === confirmarEmailControl.value) {
        this.isEmailConfirmed = true;
      } else {
        this.isEmailConfirmed = false;
      }
    }
  }

  setupPasswordValidation() {
    const passwordControl = this.dataccount.get('password');
    const confirmarPasswordControl = this.dataccount.get('confirmarPassword');

    if (passwordControl && confirmarPasswordControl) {
      passwordControl.valueChanges.subscribe(() => {
        const passwordValue = passwordControl.value;
        if (passwordValue ) {
          confirmarPasswordControl.setValidators([
            Validators.required,
            Validators.minLength(4),
            Validators.pattern(/\d+$/),
            Validators.pattern(passwordValue),
          ]);
          confirmarPasswordControl.updateValueAndValidity();
        }
      });
    }
  }


}
