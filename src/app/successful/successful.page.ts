import { Component } from "@angular/core";
import { NavController } from "@ionic/angular";
import { UserDataService } from "../services/user-data.service";

@Component({
  selector: "app-successful",
  templateUrl: "./successful.page.html",
  styleUrls: ["./successful.page.scss"]
})
export class SuccessfulPage {
  loading: boolean = false;

  constructor(
    private navCtrl: NavController,
    public userDataService: UserDataService
  ) {}

  /* Navigates to the home route. */
  nextToHome() {
    this.loading = true;
    setTimeout(() => {
      this.navCtrl.navigateRoot("/home");
      this.loading = false;
    }, 2000);
  }
}
