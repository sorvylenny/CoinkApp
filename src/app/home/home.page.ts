import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { NavController } from "@ionic/angular";

@Component({
  selector: "app-home",
  templateUrl: "home.page.html",
  styleUrls: ["home.page.scss"]
})
export class HomePage {
  constructor(private navCtrl: NavController, private router: Router) {}

  loading: boolean = false;

  /**
 * Function to navigate to the next page after setting loading state to true and then back to false after 2 seconds.
 */
  navigateToNextPage() {
    this.loading = true;
    setTimeout(() => {
      this.router.navigate(["/phone"]);
      this.loading = false;
    }, 2000);
  }
}
