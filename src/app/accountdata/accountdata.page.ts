import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormControl, Validators } from "@angular/forms";
import { NavController } from "@ionic/angular";
import { DocumenTypeService } from "../services/documen-type.service";
import { UserDataService } from "../services/user-data.service";
import { Document } from "../interface/document";

@Component({
  selector: "app-accountdata",
  templateUrl: "./accountdata.page.html",
  styleUrls: ["./accountdata.page.scss"]
})
export class AccountdataPage implements OnInit {
  loading: boolean = false;
  currentNumber: number = 1;
  isEmailConfirmed: boolean = false;
  identification: Document[] = [];
  hidePassword: boolean = true;
  hidePasswordconf: boolean = true;
  generos = ["Femenino", "Masculino"];

  dataccount = this._formBuilder.group({
    typeDocument: ["", Validators.required],
    numberDocument: ["", [Validators.required, Validators.maxLength(10), Validators.pattern("^[0-9]*$")]],
    dateExpedition: ["", [Validators.required, this.validateDate]],
    dateBirth: [ "",[Validators.required, this.validateDate, this.validateAge(18)]   ],
    gender: ["", Validators.required],
    email: ["", [Validators.required, Validators.email]],
    confirmMail: ["", Validators.required],
    password: ["", [Validators.required, Validators.minLength(4)]],
    confirmPassword: ["", [Validators.required, Validators.minLength(4)]]
  });

  constructor(
    private _formBuilder: FormBuilder,
    private navCtrl: NavController,
    private documentService: DocumenTypeService,
    private userDataService: UserDataService
  ) {}

  ngOnInit() {
    this.documentService.typeDocument().subscribe({
      next: data => {
        this.identification = data;
      },
      error: error => console.error(error)
    });

    this.setupPasswordValidation();
    this.setupEmailValidation();
  }
  /* Validates a date input field */
  validateDate(control: FormControl): { [key: string]: any } | null {
    if (isNaN(Date.parse(control.value))) {
      return { invalidDate: true };
    }
    return null;
  }
/* Returns a function that validates the age based on the minimum age provided. */
  validateAge(minimumAge: number) {
    return (control: FormControl): { [key: string]: any } | null => {
      const birthday = new Date(control.value);
      const today = new Date();
      let age = today.getFullYear() - birthday.getFullYear();
      const monthDiff = today.getMonth() - birthday.getMonth();
      if (
        monthDiff < 0 ||
        (monthDiff === 0 && today.getDate() < birthday.getDate())
      ) {
        age--;
      }
      if (age < minimumAge) {
        return { invalidAge: true };
      }
      return null;
    };
  }
/* Resets the value of the dateExpedition control to null. */
  setExpeditionDate() {
    const dateExpeditionControl = this.dataccount.get("dateExpedition");
    if (dateExpeditionControl) {
      dateExpeditionControl.setValue(null);
    }
  }
  /* Initiates form submission process*/
  nextSubmit() {
    this.loading = true;
    if (this.dataccount.valid) {
      this.userDataService.setMultipleUserData(this.dataccount.value);
      setTimeout(() => {
        this.navCtrl.navigateForward("/contract");
        this.loading = false;
      }, 2000);
    } else {
      console.error("Invalid form submission");
    }
  }
  /* Toggles the visibility of the password. */
  togglePasswordVisibility() {
    this.hidePassword = !this.hidePassword;
  }
  /* Toggles the visibility of the password. */
  passwordVisibility() {
    this.hidePasswordconf = !this.hidePasswordconf;
  }
/**
 * Sets up email validation for a form.
 * - Gets the email and confirm email fields from a data object.
 * - Sets up a listener for changes to the email field.
 * - When the email field changes, it sets the confirm email field's validators.
 * - Updates the validity of the confirm email field.
 * - Checks if the email confirmation is valid.
 */
  setupEmailValidation() {
    const emailControl = this.dataccount.get("email");
    const confirmarEmailControl = this.dataccount.get("confirmMail");

    if (emailControl && confirmarEmailControl) {
      emailControl.valueChanges.subscribe(() => {
        const emailValue = emailControl.value;
        if (emailValue) {
          confirmarEmailControl.setValidators([
            Validators.required,
            Validators.email,
            Validators.pattern(emailValue),
            Validators.minLength(4)
          ]);
          confirmarEmailControl.updateValueAndValidity();
          this.checkEmailConfirmation();
        }
      });
    }
  }
  /**
 * Checks if the email confirmation matches the email input value.
 * Sets the isEmailConfirmed flag accordingly.
 */
  checkEmailConfirmation() {
    const emailControl = this.dataccount.get("email");
    const confirmarEmailControl = this.dataccount.get("confirmMail");

    if (emailControl && confirmarEmailControl) {
      if (emailControl.value === confirmarEmailControl.value) {
        this.isEmailConfirmed = true;
      } else {
        this.isEmailConfirmed = false;
      }
    }
  }
  /**
 * Sets up password validation for the "password" and "confirmPassword" fields in the form.
 * When the value of the "password" field changes, the validators of the "confirmPassword" field are updated to enforce certain requirements.
 */
  setupPasswordValidation() {
    const passwordControl = this.dataccount.get("password");
    const confirmarPasswordControl = this.dataccount.get("confirmPassword");

    if (passwordControl && confirmarPasswordControl) {
      passwordControl.valueChanges.subscribe(() => {
        const passwordValue = passwordControl.value;
        if (passwordValue) {
          confirmarPasswordControl.setValidators([
            Validators.required,
            Validators.minLength(4),
            Validators.pattern(/\d+$/),
            Validators.pattern(passwordValue)
          ]);
          confirmarPasswordControl.updateValueAndValidity();
        }
      });
    }
  }
}
