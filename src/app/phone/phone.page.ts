import { Component, EventEmitter, Output } from "@angular/core";
import { FormBuilder, Validators } from "@angular/forms";
import { NavController } from "@ionic/angular";

@Component({
  selector: "app-phone",
  templateUrl: "./phone.page.html",
  styleUrls: ["./phone.page.scss"]
})
export class PhonePage {
blur() {
throw new Error('Method not implemented.');
}
  currentNumber: number = 0;
  loading: boolean = false;
  phoneNumber = this._formBuilder.group({
    phoneNumber: ["", [Validators.required, Validators.maxLength(10)]]
  });
  showKeyboard: boolean = false;
  numberBuffer: string = '';
  constructor(
    private _formBuilder: FormBuilder,
    private navCtrl: NavController
  ) {}

  onSubmit() {
    if (this.phoneNumber.valid) {
      this.phoneNumber.value.phoneNumber;
      this.loading=true;
      console.log(this.loading)
      setTimeout(() => {
        console.log('esperando 2 segundos...');
        this.navCtrl.navigateForward("/accountdata");
        this.loading=false;
        console.log(this.loading)
      }, 2000);

    } else {
      console.log("Invalid form submission");
    }
  }
  openKeyboard() {
    this.showKeyboard = true;
  }

  addNumber(number: number) {
    this.numberBuffer += number.toString();
    if (this.numberBuffer.length <= 10) {
      this.phoneNumber.patchValue({
        phoneNumber: this.numberBuffer,
      });
    }
  }
  deleteNumber(){
    this.numberBuffer = this.numberBuffer.slice(0, -1);
    this.phoneNumber.patchValue({
      phoneNumber: this.numberBuffer,
    });
  }
}
