import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {MatFormFieldModule} from '@angular/material/form-field';

import {MatDividerModule} from '@angular/material/divider';

import {MatTooltipModule} from '@angular/material/tooltip';

import { IonicModule } from '@ionic/angular';

import { PhonePageRoutingModule } from './phone-routing.module';

import { PhonePage } from './phone.page';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PhonePageRoutingModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatDividerModule,
    SharedModule,
    MatTooltipModule
  ],
  declarations: [PhonePage]
})
export class PhonePageModule {}
