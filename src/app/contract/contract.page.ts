import { Component } from '@angular/core';

@Component({
  selector: 'app-contract',
  templateUrl: './contract.page.html',
  styleUrls: ['./contract.page.scss'],
})
export class ContractPage  {

  currentNumber: number = 2;

  constructor() { }

  nextSubmit(){
    this.currentNumber = 1
  }



}
