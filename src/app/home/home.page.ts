import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage  {
  constructor(private navCtrl: NavController, private router:Router) { }

  loading: boolean = false;

  navigateToNextPage() {
    this.loading = true;
    console.log(this.loading);
    setTimeout(() => {
      console.log('esperando 2 segundos...');
      this.router.navigate(['/phone']);
      this.loading = false;
      console.log(this.loading);
    }, 2000);
  }

}
