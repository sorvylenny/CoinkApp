import { Component } from "@angular/core";
import { NavController } from "@ionic/angular";

@Component({
  selector: "app-home",
  templateUrl: "home.page.html",
  styleUrls: ["home.page.scss"]
})
export class HomePage {

  constructor(private navCtrl: NavController) {}

  loading: boolean = false;

  /**
 * Function to navigate to the next page after setting loading state to true and then back to false after 2 seconds.
 */
  navigateToNextPage() {
    this.loading = true;
    setTimeout(() => {
      this.navCtrl.navigateForward(["/phone"]);
      this.loading = false;
    }, 2000);
  }
}
