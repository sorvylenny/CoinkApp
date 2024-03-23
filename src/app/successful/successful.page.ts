import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';
import { UserDataService } from '../services/user-data.service';

@Component({
  selector: 'app-successful',
  templateUrl: './successful.page.html',
  styleUrls: ['./successful.page.scss'],
})
export class SuccessfulPage  {

  constructor(private navCtrl: NavController,
    public userDataService: UserDataService) { }

  nextToHome() {
    this.navCtrl.navigateRoot('/home');
    this.userDataService.completeRegistration();
    console.log('complete registration', this.userDataService.completeRegistration());
  }

}
