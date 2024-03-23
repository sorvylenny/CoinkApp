import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'phone',
    loadChildren: () => import('./phone/phone.module').then( m => m.PhonePageModule)
  },
  {
    path: 'accountdata',
    loadChildren: () => import('./accountdata/accountdata.module').then( m => m.AccountdataPageModule)
  },
  {
    path: 'contract',
    loadChildren: () => import('./contract/contract.module').then( m => m.ContractPageModule)
  },
  {
    path: 'successful',
    loadChildren: () => import('./successful/successful.module').then( m => m.SuccessfulPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
