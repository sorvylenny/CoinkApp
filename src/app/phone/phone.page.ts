import { Component, EventEmitter, Output } from "@angular/core";
import { FormBuilder, Validators } from "@angular/forms";
import { NavController } from "@ionic/angular";
import { UserDataService } from "../services/user-data.service";

@Component({
  selector: "app-phone",
  templateUrl: "./phone.page.html",
  styleUrls: ["./phone.page.scss"]
})
export class PhonePage {
  currentNumber: number = 0;
  loading: boolean = false;
  phoneNumber = this._formBuilder.group({
    phoneNumber: ["", [Validators.required, Validators.minLength(11), Validators.maxLength(11)]]
  });
  showKeyboard: boolean = false;
  numberBuffer: string = '';
  constructor(
    private _formBuilder: FormBuilder,
    private navCtrl: NavController,
    private userDataService: UserDataService
  ) {}

  onSubmit() {
    if (this.phoneNumber.valid) {
      const phoneNumberValue = this.phoneNumber.value.phoneNumber;
      this.userDataService.setUserData('phoneNumber', phoneNumberValue);
      console.log('Phone number:', phoneNumberValue);
      this.loading = true;
      console.log(this.loading);
      setTimeout(() => {
        console.log('esperando 2 segundos...');
        this.navCtrl.navigateForward("/accountdata");
        this.loading = false;
        console.log(this.loading);
      }, 2000);
    } else {
      console.log("Invalid form submission");
    }
  }

  addNumber(number: number) {
    if (this.numberBuffer.length < 11) {
      if (this.numberBuffer.length === 0 && number !== 3) {
        return;
      }

      this.numberBuffer += number.toString();
      let formattedNumber = '';
      for (let i = 0; i < this.numberBuffer.length; i++) {
        formattedNumber += this.numberBuffer[i];
        if (i === 2) {
          formattedNumber += '-';
        }
      }
      this.phoneNumber.patchValue({
        phoneNumber: formattedNumber,
      });
    }
  }


  deleteNumber() {
    if (this.numberBuffer.length > 0) {
      this.numberBuffer = this.numberBuffer.slice(0, -1);
      let formattedNumber = '';
      for (let i = 0; i < this.numberBuffer.length; i++) {
        formattedNumber += this.numberBuffer[i];
        if (i === 2) {
          formattedNumber += '-';
        }
      }
      this.phoneNumber.patchValue({
        phoneNumber: formattedNumber,
      });
    }
  }

}
