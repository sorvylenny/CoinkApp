import { Component } from '@angular/core';
import { UserDataService } from '../services/user-data.service';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-contract',
  templateUrl: './contract.page.html',
  styleUrls: ['./contract.page.scss'],
})
export class ContractPage  {

  currentNumber: number = 2;
  checkbox : boolean = false;
  loading: boolean = false;

  constructor(private userDataService: UserDataService,
              private navCtrl: NavController){}

  nextToPage(){
    this.currentNumber = -1

  }
  /* Updates the checkbox value and performs additional actions if the accepted parameter is true. */
  nextSubmit(accepted: boolean){
    this.checkbox = accepted;
    this.loading = true;
    if (accepted) {
      this.userDataService.setUserData('contractAccepted', true);
      this.userDataService.completeRegistration();
      console.log('complete registration', this.userDataService.completeRegistration());
      setTimeout(() => {
        this.navCtrl.navigateForward('/successful');
      }, 2000);
    } else {
      console.error("Invalid form submission");
    }

    }
  }


