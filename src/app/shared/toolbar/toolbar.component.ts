import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss'],
})
export class ToolbarComponent   {
  @Input() currentStep = 0;
  @Output() stepChanged = new EventEmitter<number>();
  pages = [
    { title: 'Número Celular', completed: true },
    { title: 'Datos de la Cuenta', completed: false },
    { title: 'Finalizar', completed: false }
  ];

  constructor( private router: Router) { }

  nextStep() {
    if (this.currentStep < this.pages.length - 1) {
      this.pages[this.currentStep].completed = true;
      this.currentStep++;
      const backRoute = this.getBackRoute();
      this.navigateToNextPage(backRoute);
      this.stepChanged.emit(this.currentStep);
    }
  }

  getBackRoute(): string {
    console.log("current step", this.currentStep);
    switch (this.currentStep) {
      case 0:
        return '/home';
      case 1:
        return '/phone';
      case 2:
        return '/accountdata';
      default:
        return '/home';
    }
  }


  navigateToNextPage(route:string):void {
  this.router.navigateByUrl(route);
  }

}
