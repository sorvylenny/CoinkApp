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
// Function to add a number to the input field
  addNumber(number: number) {
    this.numberClicked.emit(number);
  }

  // Function to delete a number from the input field
  deleteNumber() {
    this.deleteClicked.emit();
  }
// Function to accept the entered number if the form is valid
  acceptNumber() {
    if (this.formValid) {
      this.acceptClicked.emit();
    }
  }
}
