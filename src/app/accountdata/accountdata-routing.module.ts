import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AccountdataPage } from './accountdata.page';

const routes: Routes = [
  {
    path: '',
    component: AccountdataPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AccountdataPageRoutingModule {}
