import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserDataService {
  private userData: Record<string, any> = {};

  constructor() { }

  setUserData(key: string, value: any): void {
    this.userData[key] = value;
  }

  setMultipleUserData(data: Record<string, any>): void {
    for (const key in data) {
      if (data.hasOwnProperty(key)) {
        this.userData[key] = data[key];
      }
    }
  }

  getUserData(key: string): any {
    return this.userData[key];
  }

  getAllUserData(): Record<string, any> {
    return this.userData;
  }

  completeRegistration() {
   console.log('registro completo',this.userData);
  }
}
