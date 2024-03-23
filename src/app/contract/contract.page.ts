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

  constructor(private userDataService: UserDataService,
              private navCtrl: NavController){}

  nextToPage(){
    this.currentNumber = -1

  }
  nextSubmit(accepted: boolean){
    this.checkbox = accepted;
    if (accepted) {
      this.userDataService.setUserData('contractAccepted', true);
      console.log('Contract accepted:', accepted);
      this.navCtrl.navigateForward('/successful');
    }
  }



}
