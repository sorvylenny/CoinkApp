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

   const userDataJSON = JSON.stringify(this.userData);
   const blob = new Blob([userDataJSON], { type: 'text/plain' });
   const anchor = document.createElement('a');
   anchor.download = 'userData-log.txt';
   anchor.href = window.URL.createObjectURL(blob);
   anchor.dataset["downloadurl"]= ['text/plain', anchor.download, anchor.href].join(':');
   anchor.style.display = 'none';

   // Agrega el elemento <a> al cuerpo del documento
   document.body.appendChild(anchor);

   // Simula un clic en el elemento <a> para iniciar la descarga
   anchor.click();

   // Elimina el elemento <a> después de la descarga
   document.body.removeChild(anchor);
  }


}
