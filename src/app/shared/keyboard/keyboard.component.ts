import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-keyboard',
  templateUrl: './keyboard.component.html',
  styleUrls: ['./keyboard.component.scss'],
})
export class KeyboardComponent   {
  numbers: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  @Input() loading!: boolean ;
  @Input() formValid!: boolean;

  @Output() numberClicked = new EventEmitter<number>();
  @Output() deleteClicked = new EventEmitter<void>();
  @Output() acceptClicked = new EventEmitter<void>();

  addNumber(number: number) {
    this.numberClicked.emit(number);
  }

  deleteNumber() {
    this.deleteClicked.emit();
  }

  acceptNumber() {
    if (this.formValid) {
      this.acceptClicked.emit();
    }
  }
}
