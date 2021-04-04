import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { NeedMaterialPageRoutingModule } from './need-material-routing.module';

import { NeedMaterialPage } from './need-material.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    NeedMaterialPageRoutingModule
  ],
  declarations: [NeedMaterialPage]
})
export class NeedMaterialPageModule {}
